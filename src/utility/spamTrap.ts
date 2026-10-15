export const HONEYPOT_FIELD = "hp_comment_check"

export interface SpamTrapData {
  honeypot: string
  elapsedMs: number
}

export function readSpamTrap(
  form: HTMLFormElement,
  startedAt: number
): SpamTrapData {
  const value = new FormData(form).get(HONEYPOT_FIELD)
  return {
    honeypot: typeof value === "string" ? value : "",
    elapsedMs: Date.now() - startedAt,
  }
}
