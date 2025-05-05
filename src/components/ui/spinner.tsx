import * as React from "react";
import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="spinner"
			className={cn(
				"animate-spin rounded-full border-4 border-primary border-t-transparent",
				className
			)}
			{...props}
		/>
	);
}

export { Spinner };
