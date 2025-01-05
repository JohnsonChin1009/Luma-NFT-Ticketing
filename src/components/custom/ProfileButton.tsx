"use client";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function ProfileButton() {
    return (
        <>
            <DropdownMenu>
            <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>OG</AvatarFallback>
                        </Avatar></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Connect to dApp</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><WalletMultiButton /></DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}