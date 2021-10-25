import React, { ReactNode } from "react";
import { Calendar } from "../Calendar";

interface LayoutProps {
	children: ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<main>
			<Calendar />
			{children}
		</main>
	)
}
