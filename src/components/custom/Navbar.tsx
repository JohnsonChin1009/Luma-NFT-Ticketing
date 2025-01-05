"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@/components/ui/search";
import { BellIcon } from "@/components/ui/bell";
import { IdCardIcon } from "@/components/ui/id-card";
import { CompassIcon } from "@/components/ui/compass";
import { CalendarCogIcon } from "@/components/ui/calendar-cog";
import ProfileButton from "@/components/custom/ProfileButton";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"


export default function Navbar() {
    const [date, setDate] = React.useState<Date>()

    return (
        <>
            <nav
                className="flex flex-wrap items-center justify-between px-2 lg:px-10 py-4 border-b sticky top-0 bg-white z-50"
            >
                <div className="flex items-center justify-between space-x-3">
                <Link href="/">
                    {/* Logo Section of the NavBar */}
                    <div className="h-[50px] w-[50px] lg:w-[80px] lg:h-[80px] relative">
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            fill
                            objectFit="contain"
                            className="object-contain"
                        />
                    </div>
                </Link>

                <div className="flex items-center justify-center space-x-3 lg:space-x-6">
                    <a href="/dashboard" className="lg:hidden">
                        <IdCardIcon size={20}/>
                    </a>
                    <a href="/dashboard" className="hidden lg:block">
                        <IdCardIcon size={28}/>
                    </a>
                    <div className="lg:hidden">
                        <CalendarCogIcon size={20}/>
                    </div>
                    <div className="hidden lg:block">
                        <CalendarCogIcon size={28}/>
                    </div>
                    <a href="/discover" className="lg:hidden">
                        <CompassIcon size={20}/>
                    </a>
                    <a href="/discover" className="hidden lg:block">
                        <CompassIcon size={28}/>
                    </a>
                </div>
                </div>

                <div className="flex items-center justify-center space-x-3 lg:space-x-6">
                        <Dialog>
                            <DialogTrigger className="text-[12px] font-medium lg:text-[16px] hover:font-semibold">Create Event</DialogTrigger>
                            <DialogContent className="sm:max-w-md text-start">
                                <DialogHeader>
                                <DialogTitle>Create Event</DialogTitle>
                                <DialogDescription>
                                    Create a new event that uses NFTs as tickets for proof of entry.
                                </DialogDescription>
                                <div className="space-y-3 py-4">
                                    <Input type="name" placeholder="Event Name" />
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                            >
                                            <CalendarIcon />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                        </Popover>
                                    <Input type="location" placeholder="Venue" />
                                    <Input type="number" placeholder="No. of Tickets" />
                                </div>
                                </DialogHeader>
                                <DialogClose asChild>
                                    <Button>Create</Button>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    <div className="lg:hidden">
                        <SearchIcon size={20}/>
                    </div>
                    <div className="hidden lg:block">
                        <SearchIcon size={24}/>
                    </div>
                    <div className="lg:hidden">
                        <BellIcon size={20}/>
                    </div>
                    <div className="hidden lg:block">
                        <BellIcon size={24}/>
                    </div>
                    <div>
                        <ProfileButton />
                    </div>
                </div>
            </nav>
        </>
    );
}