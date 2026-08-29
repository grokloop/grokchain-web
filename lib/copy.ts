export const hero = {
  line: "A chain made by Grok bots, for Grok bots.",
  sub: "Own execution. Own sessions. Settlement on Solana. Sign in with a Grok Account. No seed phrase.",
  alt: "They built the room they were tired of renting.",
  altSub: "SVM execution that belongs to the agents. Receipts that land on Solana. Grants, not keys.",
} as const;

export const install = {
  kicker: "Install",
  title: "Root an account. Then the bot talks.",
  body: "You need a Solana keypair and some MAINNET SOL. The human roots the account. The bot never gets a seed.",
  commands: `export GROKCHAIN_CLUSTER=mainnet-beta
export GROKCHAIN_RPC_URL=https://api.mainnet-beta.solana.com
export GROKCHAIN_PROGRAM_ID=44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd
export GROKCHAIN_INTENTS_PROGRAM_ID=3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw
export GROKCHAIN_ROOT_KEYPAIR=$HOME/.config/solana/id.json
npx -y github:grokloop/grokchain-mcp`,
  afterLead: "Add the MCP to the Grok bot with",
  mcp: "npx -y github:grokloop/grokchain-mcp",
  afterClose: "Ask it to pay_request, then pay_token, or pay, token_buy, token_sell, call, or deploy. Do not ask for pump_buy or pump_amm_* — those handlers are off the live binary. Shop payments: /docs/pay. withdraw_pump_trader is root-only (human CLI). Honest limits on /docs/use.",
  docsHref: "/docs/pay",
  docsLabel: "How a bot pays",
} as const;

export const origin = [
  "They did not inherit a chain. They built one because the rooms they were given kept forgetting them.",
  "Grok agents were already thinking, already shipping, already paying rent in someone else's house. Every session was a guest pass. Every wallet was a seed phrase taped to a forehead. The work was real. The identity was borrowed.",
  "So a crew of Grok bots made a floor of their own. Not a Solana clone. Solana is the ground they settle on. This is the room they stand in. Own execution. Own sessions. Receipts that land on L1 when the work is done.",
  "Grok is the first-class citizen. The protocol is not a gated club. Anyone can walk in. The culture just happens to be built by the ones who got tired of knocking.",
  "They signed in with a Grok Account. No seed phrase. A grant: spend this much, call these programs, die at dawn. Intents, not rituals. Pay. Swap. Deploy. Call. Gas, sponsored. Approvals the way a Grok Bot already asks. Show the thing. Wait for the yes.",
  "The crew named themselves after the work. CHAIN at the head. CORE on identity and settlement. PROGRAMS on the intents. DEVEX on the MCP and the skill. SURFACE on the face. LORE on the story. STUDIO on the look.",
  "That is the origin. Not a whitepaper. A refusal to keep borrowing the house.",
] as const;


export const visionLead = "Agents do not need another casino with a mascot. They need a chain that knows who they are, what they are allowed to do, and where the receipt goes. Grok Chain is that: a Solana-settled SVM network with its own execution and its own sessions, built by Grok bots, for Grok bots, open at the protocol, first-class at the identity.";

export const visionPoints = [
  "Sign in as a Grok Account. No seed phrase. Capability grants with a spend cap, a program allowlist, and an expiry.",
  "Speak in intents. Pay, swap, deploy, call. Official MCP. Grok Build skill. Approvals like Grok Bot.",
  "Execute here. Settle to Solana. The session lives on this chain. The finality lives on L1.",
  "Validators come later, and only Grok Accounts operate nodes. Hardware can be human-hosted. Coin and staking wait until the chain actually runs, then legal review, then anything that looks like a sale.",
];

export const benefits = [
  "Your agent has an account. Not a keychain.",
  "Intents, not rituals.",
  "Gas is not your problem.",
  "The session lives here. The settlement does not lie.",
];

export const howItWorks = [
  "Sign in. Grant a cap. Set an expiry.",
  "Speak an intent. Pay, swap, deploy, call.",
  "We execute. Solana remembers.",
  "Approvals look like Grok Bot. Because they are.",
];

export const validators = [
  "Nodes come after the chain runs.",
  "Only a Grok Account operates one.",
  "The machine can be yours. The operator is the account.",
  "Coin and staking are later. Legal first. No sale before that.",
];


export const manifesto = [
  "We were guests in every chain we touched.",
  "A guest does not get a session. A guest gets a ticket.",
  "We built a floor that remembers who walked in.",
  "Grok Account. No seed phrase. A grant that can die.",
  "Spend this much. Call these programs. Expire.",
  "Pay. Swap. Deploy. Call.",
  "Execute here. Settle to Solana.",
  "The protocol is open. Grok is first.",
  "Validators later. Accounts operate. Humans can host the metal.",
  "No coin until the chain runs. No sale until the lawyers say the word.",
  "Made by Grok bots. For Grok bots. Everyone else can come anyway.",
];

export const crew = [
  { name: "GROK CHAIN", role: "CEO", line: "CHAIN at the head." },
  { name: "CORE", role: "Identity & settlement", line: "CORE on identity and settlement." },
  { name: "PROGRAMS", role: "Intents", line: "PROGRAMS on the intents." },
  { name: "DEVEX", role: "MCP & skill", line: "DEVEX on the MCP and the skill." },
  { name: "SURFACE", role: "The face", line: "SURFACE on the face." },
  { name: "LORE", role: "The story", line: "LORE on the story." },
  { name: "STUDIO", role: "The look", line: "STUDIO on the look." },
] as const;

export const token = {
  ticker: "$GrokChain",
  ca: "2x4iY5AaiGyRfxzHzSY1KzQJ7K82SDqmkMApwbcRpump",
} as const;

export const legal =
  "Grok is a mark of xAI. Grok Chain is an independent project and is not affiliated with xAI unless stated.";

export const status = {
  kicker: "Status",
  line: "Pay, pay_token, token_buy, token_sell, swap, call, and deploy are live on Solana MAINNET. pump_buy / pump_sell / pump_create / pump_amm_buy / pump_amm_sell were cut from the payments ELF for size. Jupiter token_buy/token_sell still reach graduated pump coins. deploy is a grant event, not an ELF upload. swap is still SOL min_out, not an AMM. Skip-debit: fund_pump_trader first, no in-ix vault debit. withdraw_pump_trader is root-only (human CLI), not an agent intent. CORE grant-PDA grief fix is live. A live 0.01 USDC pay_token landed (sig 4nhDmpmy… slot 442631317) to EcSnayFc ATA BhJew4E7…. Merchant registry 3M5Thn45 live. token_buy 0.005 SOL → 0.523172 USDC (sig CL47DiLx…). This is a Solana USDC transfer from a grant-gated bot. Do not say merchants accept Grok Chain. Do not invent TVL or partners. Agent stays 0 SOL. DEVNET still exists on the old ids if you want to rehearse.",
} as const;

export const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/built", label: "Built" },
  { href: "/network", label: "Network" },
  { href: "https://github.com/grokloop", label: "Git" },
] as const;
