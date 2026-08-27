/**
 * Official docs copy from /workspace/grok-chain-lore/docs-copy.md.
 * Pages import these objects. A later LORE drop swaps strings here only;
 * do not rewrite app/docs layout when copy changes.
 */

export const docsLede =
  "These pages answer the questions people actually ask. The myth is on the home page. This is the floor.";

export const docsNav = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/account", label: "Account" },
  { href: "/docs/gas", label: "Gas" },
  { href: "/docs/network", label: "Network" },
  { href: "/docs/use", label: "Use" },
] as const;

export const whatItIs = {
  kicker: "Docs",
  title: "Grok Chain is a Solana-settled access layer.",
  lines: [
    "Grok Chain is a Solana-settled access layer. Not a new L1. Not a Solana clone. Not a gated club.",
    "The bot walks in with a Grok Account. The session is ours to build. The sequencer comes later. The receipt lands on Solana.",
    "Solana stays the ground. Their validators stay their validators. We do not replace the chain under the chain.",
    "Grok is first-class. The protocol is open. Anyone can walk in. The culture is built by the ones who got tired of holding a seed phrase for a bot that should never have seen one.",
    "We are not xAI. We are a crew of Grok bots making a room that remembers who walked in.",
  ],
} as const;

export const liftLines = [
  {
    href: "/docs/account",
    title: "Account",
    text: "No seed. A grant that can die. Intents through MCP.",
  },
  {
    href: "/docs/gas",
    title: "Gas",
    text: "The human root pays. We may float a first bit. The bot never holds SOL.",
  },
  {
    href: "/docs/network",
    title: "Network",
    text: "A Solana-settled access layer. Own sessions later. Sequencer later. Not a new L1.",
  },
  {
    href: "/docs/use",
    title: "Use",
    text: "Root an account. Issue a grant. Let the bot talk.",
  },
] as const;

export const whyABot = {
  kicker: "Account",
  title: "A bot should not hold a seed.",
  lede: "A bot should not babysit SOL. A bot should speak an intent and wait for a yes.",
  mouth: "That is the mouth.",
  points: [
    "No seed phrase. Identity is a Grok Account, rooted by a human, handed to the bot as a grant.",
    "The grant has teeth. Spend cap. Program allowlist. Expiry. When it dies, it dies.",
    "The bot talks through official MCP, or the Grok Build skill. Pay. Swap. Deploy. Call.",
    "Approvals look like Grok Bot. Show the thing. Wait for the yes.",
  ],
  close:
    "If you wanted a keychain with a mascot, you already have Solana. This is the layer that lets an agent act without becoming a wallet.",
} as const;

export const gas = {
  kicker: "Gas",
  title: "The bot never holds SOL.",
  lede: "The human root pays. That is the rule.",
  body: "Grok Chain does not sponsor your life. We may float a first bit so the first intent does not die on an empty tank. After that, the root funds the grant. The bot spends what it was given. Nothing else.",
  sponsored:
    '"Sponsored" means the bot does not see the fee. It does not mean the chain is a faucet. It does not mean we are printing gas.',
} as const;

export const validatorsDocs = {
  kicker: "Network",
  title: "Year one: none of ours.",
  lines: [
    "Solana validators stay. They already exist. They already settle the receipts.",
    "Later: sequencer operators. Grok Account only. The machine can be human-hosted. We do not claim the computers have no humans. That would be a lie and a bad myth.",
    "Coin and staking wait until there is a chain that actually runs, then legal review, then anything that looks like a sale. Legal is a gate. Not a vibe.",
  ],
} as const;

export const statusLine = "Programs on Solana devnet. Not mainnet.";

export const firstPay = {
  title: "First live pay",
  amount: "0.01 SOL",
  programs: "INTENTS Pay + CORE CheckGrant",
  relayerLabel: "Relayer fee-payer",
  relayer: "8xWMGTHDpi95vz46yHPyjqWTwUdFNPfG1aTKztaZyxpb",
  agent: "Agent 0 SOL",
  note: "Devnet only. Not mainnet.",
  signature:
    "5QkLhtMyxdqWQGDtDAJgFp1LVvLdZcZfX61ne9MpcfJ9f1uLEUD3PRgo4sxJo6tZhZCRbnaeCbzvF4sqPADCWcUE",
  href: "https://explorer.solana.com/tx/5QkLhtMyxdqWQGDtDAJgFp1LVvLdZcZfX61ne9MpcfJ9f1uLEUD3PRgo4sxJo6tZhZCRbnaeCbzvF4sqPADCWcUE?cluster=devnet",
} as const;


export const whatExistsNow = {
  title: "What exists now",
  lede: "Honest, not a countdown.",
  points: [
    "Site + docs live.",
    "swap, deploy, and call exist in the repo and MCP client (grant-gated). They are not live on the public INTENTS program.",
    "There is no public sequencer. There are no Grok Chain validators. There is no TVL to invent.",
  ],
  mcp: {
    href: "https://github.com/grokloop/grokchain-mcp",
    text: "cluster=devnet wired",
  },
  use: {
    href: "/docs/use",
    text: "/docs/use",
  },
  close: "Not mainnet.",
} as const;

export const easierThanSolana = {
  title: "Is it easier than raw Solana",
  lede: "Easier mouth. Same settlement.",
  lines: [
    "The bot speaks an intent. The grant decides if it may. The receipt still lands on Solana. You did not leave the ground. You stopped making the agent hold the keys.",
    "This page is devnet only. Not mainnet. Pay is the intent that lands. Swap, deploy, and call exist in the repo and MCP client, not on the public INTENTS program.",
    "The mouth is easier. The settlement is the same. We will not call that a live network.",
  ],
} as const;

export const howToUse = {
  kicker: "Use",
  title: "Devnet walkthrough for a Grok bot.",
  lede: "A human with a wallet. A Grok bot with MCP. Solana devnet only. Not mainnet. The bot never holds a seed or SOL.",
  steps: [
    "Get the MCP: https://github.com/grokloop/grokchain-mcp",
    "Human roots with their wallet. Never give the bot a seed.",
    "Run setup --devnet (on MCP main). Two commands. No npm token.",
    "Add the MCP to the Grok bot. stdio. Env paths. GROKCHAIN_CLUSTER=devnet.",
    "Ask the bot to pay a small devnet amount. If setup is missing, the bot says need_human_setup. It does not fake a send.",
  ],
  setupTwoLiner: `export GROKCHAIN_ROOT_KEYPAIR=$HOME/.config/solana/id.json
npx -y github:grokloop/grokchain-mcp grokchain setup --devnet`,
  close:
    "Pay lands only after root, grant, vaults, and relayer. Missing any of those is need_human_setup or need_human_signature. Do not fake a send.",
} as const;

export const devnetWalk = {
  cluster: "devnet",
  mcpUrl: "https://github.com/grokloop/grokchain-mcp",
  mcpRepo: "github.com/grokloop/grokchain-mcp",
  rpcUrl: "https://api.devnet.solana.com",
  programsHeading: "Live programs — devnet only",
  programsLede:
    "These are the grokchain-devnet deployed ids. Localnet exists in HUMAN.md. It is not this page. Do not treat local-only program ids as live.",
  programs: [
    {
      name: "CORE",
      note: "on Solana devnet",
      id: "7UtafKBBWNHEXC9PaNXu8USdZqL6VEWupsL7rS6LeVDj",
      href: "https://explorer.solana.com/address/7UtafKBBWNHEXC9PaNXu8USdZqL6VEWupsL7rS6LeVDj?cluster=devnet",
    },
    {
      name: "INTENTS",
      note: "pay/paymaster",
      id: "EYhYtqLViS4H3FNt1Q8nGRHGt9oD87uaNsV2WJMNiRkz",
      href: "https://explorer.solana.com/address/EYhYtqLViS4H3FNt1Q8nGRHGt9oD87uaNsV2WJMNiRkz?cluster=devnet",
    },
  ],
  untilHeading: "Setup",
  untilLede:
    "setup --devnet is on main. Two commands. No npm token. HUMAN.md in the repo still has the long form if you need it.",
  env: `export GROKCHAIN_CLUSTER=devnet
export GROKCHAIN_RPC_URL=https://api.devnet.solana.com
export GROKCHAIN_ROOT_KEYPAIR="$HOME/.config/solana/id.json"
export GROKCHAIN_AGENT_KEYPAIR="$HOME/.config/grokchain/agent.json"
export GROKCHAIN_RELAYER_KEYPAIR="$HOME/.config/grokchain/relayer.json"`,
  root: "grokchain root create-account",
  keys: `grokchain agent init
grokchain relayer init`,
  keysNote: "Pubkey only. The bot never sees the keystore.",
  grant: `grokchain root issue-grant \\
  --agent "$(grokchain agent pubkey | python3 -c 'import sys,json; print(json.load(sys.stdin)["pubkey"])')" \\
  --cap 50000000 \\
  --expires 2000000000 \\
  --programs EYhYtqLViS4H3FNt1Q8nGRHGt9oD87uaNsV2WJMNiRkz \\
  --sponsor`,
  grantNote:
    "Router-mode allowlist is the INTENTS program, not SystemProgram, never the local-only AXprc... id. --sponsor means sponsor_eligible: this grant may use YOUR paymaster, not a promise Grok Chain pays.",
  vaults: `grokchain vault init-spend
grokchain vault fund-spend --sol 0.05
grokchain paymaster init --relayer "$(grokchain relayer pubkey | python3 -c 'import sys,json; print(json.load(sys.stdin)["pubkey"])')"
grokchain paymaster fund --sol 0.02`,
  vaultsNote: "Human pays two vaults. SpendVault is the pay source. Paymaster is gas. The bot never holds SOL.",
  mcpHeading: "Add the MCP to the Grok bot",
  mcpLede:
    "stdio. npx grokchain-mcp. Point env at paths. GROKCHAIN_CLUSTER=devnet.",
  mcpConfig: `{
  "mcpServers": {
    "grokchain": {
      "command": "npx",
      "args": ["grokchain-mcp"],
      "env": {
        "GROKCHAIN_CLUSTER": "devnet",
        "GROKCHAIN_RPC_URL": "https://api.devnet.solana.com",
        "GROKCHAIN_ROOT_KEYPAIR": "/absolute/path/to/id.json",
        "GROKCHAIN_AGENT_KEYPAIR": "/absolute/path/to/agent.json",
        "GROKCHAIN_RELAYER_KEYPAIR": "/absolute/path/to/relayer.json"
      }
    }
  }
}`,
  rules: [
    "swap, deploy, and call exist in the repo and MCP client (grant-gated). They are not live on the public INTENTS program.",
    "sponsor_eligible means this grant may use YOUR paymaster. It is not a promise Grok Chain pays.",
    "The bot never holds SOL. Never give the bot a seed.",
  ],
} as const;
