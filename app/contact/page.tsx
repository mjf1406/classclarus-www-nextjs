/** @format */

"use client";
import { FooterSection } from "@/components/layout/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(255),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(255),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "General Question",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const { firstName, lastName, email, subject, message } = values;

        const mailToLink = `mailto:admin@classclarus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello,\n\nI am ${firstName} ${lastName}.\nEmail: ${email}\n\n${message}`)}`;

        window.location.href = mailToLink;
    }

    return (
        <>
            <section className="container py-24 sm:py-32">
                <div className="mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question, feedback, or need help? We&apos;d
                            love to hear from you. Our team typically responds
                            within 24-48 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-4">
                            <Card className="bg-muted/50 border-0">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                Email Us
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                For general inquiries and
                                                support
                                            </p>
                                            <a
                                                href="mailto:admin@classclarus.com"
                                                className="text-sm text-primary hover:underline"
                                            >
                                                admin@classclarus.com
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50 border-0">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                Response Time
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                We typically respond within
                                                24-48 hours during business
                                                days.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50 border-0">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <MessageSquare className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                Feedback Welcome
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                Your feedback helps us improve
                                                ClassClarus. We read every
                                                message.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card className="lg:col-span-2 bg-muted/60 dark:bg-card">
                            <CardHeader>
                                <CardTitle>Send us a message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="grid w-full gap-4"
                                    >
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>
                                                            First Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="John"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>
                                                            Last Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Doe"
                                                                {...field}
                                                            />
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
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="john.doe@school.edu"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Subject
                                                    </FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a subject" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="General Question">
                                                                General Question
                                                            </SelectItem>
                                                            <SelectItem value="Technical Support">
                                                                Technical
                                                                Support
                                                            </SelectItem>
                                                            <SelectItem value="Feature Request">
                                                                Feature Request
                                                            </SelectItem>
                                                            <SelectItem value="Bug Report">
                                                                Bug Report
                                                            </SelectItem>
                                                            <SelectItem value="Billing Inquiry">
                                                                Billing Inquiry
                                                            </SelectItem>
                                                            <SelectItem value="Partnership">
                                                                Partnership
                                                                Opportunity
                                                            </SelectItem>
                                                            <SelectItem value="Other">
                                                                Other
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Message
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            rows={5}
                                                            placeholder="How can we help you?"
                                                            className="resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button
                                            type="submit"
                                            className="mt-4"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
