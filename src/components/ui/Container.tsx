import { ElementType, ReactNode } from "react";

/** Centered content column with the standard fluid gutter and max width. */
export default function Container({
  as: Tag = "div",
  wide = false,
  className = "",
  children,
}: {
  as?: ElementType;
  wide?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={`mx-auto w-full ${className}`}
      style={{
        maxWidth: wide ? "var(--maxw-wide)" : "var(--maxw)",
        paddingInline: "var(--gutter)",
      }}
    >
      {children}
    </Tag>
  );
}
