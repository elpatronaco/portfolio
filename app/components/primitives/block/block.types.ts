import type { Globals, Units } from "../css.types"

type Size = `${number}${Units}` | "auto" | Globals

type MarginKeys = "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml"
type Margin = Record<MarginKeys, Size>

type PaddingKeys = "p" | "px" | "py" | "pt" | "pr" | "pb" | "pl"
type Padding = Record<PaddingKeys, Size>

type ColorKeys = "color" | "bg"


export type StyledBlockProps = Margin & Padding
