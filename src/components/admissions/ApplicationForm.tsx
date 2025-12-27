import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const applicationSchema = z.object({
  // Student Information
  studentFirstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  studentLastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  studentDOB: z.date({ required_error: "Date of birth is required" }),
  gender: z.enum(["male", "female"], { required_error: "Please select gender" }),
  classApplying: z.string().min(1, "Please select a class"),
  previousSchool: z.string().optional(),
  
  // Parent/Guardian Information
  parentFullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  parentNIN: z.string().min(10, "NIN must be at least 10 characters").max(20, "NIN must be less than 20 characters"),
  relationship: z.enum(["father", "mother", "guardian"], { required_error: "Please select relationship" }),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  alternativePhone: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  address: z.string().min(5, "Address must be at least 5 characters").max(200),
  
  // Additional Information
  medicalConditions: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const classOptions = [
  { value: "baby", label: "Baby Class" },
  { value: "middle", label: "Middle Class" },
  { value: "top", label: "Top Class" },
  { value: "p1", label: "Primary 1 (P1)" },
  { value: "p2", label: "Primary 2 (P2)" },
  { value: "p3", label: "Primary 3 (P3)" },
  { value: "p4", label: "Primary 4 (P4)" },
  { value: "p5", label: "Primary 5 (P5)" },
  { value: "p6", label: "Primary 6 (P6)" },
  { value: "p7", label: "Primary 7 (P7)" },
];

export const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      studentFirstName: "",
      studentLastName: "",
      gender: undefined,
      classApplying: "",
      previousSchool: "",
      parentFullName: "",
      parentNIN: "",
      relationship: undefined,
      phoneNumber: "",
      alternativePhone: "",
      email: "",
      address: "",
      medicalConditions: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Application submitted:", data);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. We will contact you shortly to schedule an assessment.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Student Information Section */}
        <div className="space-y-6">
          <div className="border-b border-border pb-2">
            <h3 className="font-serif text-xl font-bold text-foreground">Student Information</h3>
            <p className="text-sm text-muted-foreground">Details about the student applying</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="studentFirstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="studentLastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="studentDOB"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of Birth *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("2010-01-01")
                        }
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={2010}
                        toYear={new Date().getFullYear()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="classApplying"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class Applying For *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="previousSchool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous School (if any)</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of previous school" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Parent/Guardian Information Section */}
        <div className="space-y-6">
          <div className="border-b border-border pb-2">
            <h3 className="font-serif text-xl font-bold text-foreground">Parent/Guardian Information</h3>
            <p className="text-sm text-muted-foreground">Contact details for the parent or guardian</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="parentFullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentNIN"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National ID Number (NIN) *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter NIN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="relationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 0782785342" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alternativePhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alternative Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Residential Address *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter full address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Additional Information Section */}
        <div className="space-y-6">
          <div className="border-b border-border pb-2">
            <h3 className="font-serif text-xl font-bold text-foreground">Additional Information</h3>
            <p className="text-sm text-muted-foreground">Any other relevant details</p>
          </div>

          <FormField
            control={form.control}
            name="medicalConditions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical Conditions / Allergies</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please list any medical conditions, allergies, or special needs we should be aware of (optional)" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any other information you'd like to share (optional)" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            By submitting this form, you agree to be contacted by Demere's Bright Angels Nursery & Primary School regarding the admission process.
          </p>
        </div>
      </form>
    </Form>
  );
};
