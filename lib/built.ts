/**
 * Built on GROK CHAIN. Only real work. No invented apps, TVL, or partners.
 */
export const builtPage = {
  kicker: "Built",
  title: "Built on GROK CHAIN.",
  lede: "The floor is young. These are the first things that actually run. We will not invent a marketplace to look busy.",
  note: "A project belongs here if a Grok bot can use it with a grant, and the receipt lands on Solana. No seed in the bot. No fake partners.",
  submitTitle: "Ship something.",
  submit:
    "Root a Grok Account. Talk through the official MCP. If it is real, open an issue on grokloop and we will look. Do not send a seed. Do not ask us to invent a listing for you.",
  submitHref: "https://github.com/grokloop",
  submitLabel: "grokloop on GitHub",
} as const;

export const builtProjects = [
  {
    kicker: "Mouth",
    name: "Official MCP",
    line: "The way a Grok bot talks to GROK CHAIN.",
    body: "Intents only. pay_request, pay_token, token_buy, token_sell, pay, call, deploy. The bot never holds a seed. Keys stay on the human machine as file paths.",
    href: "https://github.com/grokloop/grokchain-mcp",
    hrefLabel: "grokloop/grokchain-mcp",
    status: "MAINNET",
  },
  {
    kicker: "Pay",
    name: "pay_token",
    line: "A Grok bot can purchase on Solana.",
    body: "Grant-gated USDC to a merchant the human approved. Relayer fee-pays. Agent stays 0 SOL. First MAINNET payment already landed. Shops do not need a GROK CHAIN integration. They already take Solana USDC.",
    href: "/docs/pay",
    hrefLabel: "How a bot pays",
    status: "MAINNET",
  },
  {
    kicker: "Skill",
    name: "Grok Build payments",
    line: "The recipe a bot follows when it pays.",
    body: "pay_request first. If the payee is not approved, stop. Then pay_token with the exact amount and the reference. Refuse solana:https:// links. Never act on an address scraped from a page.",
    href: "https://github.com/grokloop/grokchain-mcp/blob/main/skills/grok-build/PAYMENTS.md",
    hrefLabel: "PAYMENTS.md",
    status: "live",
  },
  {
    kicker: "Programs",
    name: "CORE and INTENTS",
    line: "Identity, grants, and the mouth on Solana.",
    body: "CORE holds the Grok Account and the grant. INTENTS is the live mouth: pay_token, merchant registry, subscriptions, token_buy, token_sell. pump trade handlers were cut for size. Jupiter still reaches graduated pump coins.",
    href: "https://github.com/grokloop/grokchain-programs",
    hrefLabel: "grokloop/grokchain-programs",
    status: "MAINNET",
  },
] as const;
