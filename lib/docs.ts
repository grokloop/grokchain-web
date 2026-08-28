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

export const statusLine = "Pay, pump, call, and deploy are live on Solana MAINNET. Honest limits. Not a new L1.";

export const firstPay = {
  title: "First MAINNET pay",
  amount: "0.005 SOL",
  programs: "INTENTS Pay + CORE CheckGrant",
  relayerLabel: "Relayer fee-payer",
  relayer: "E8Pm8RG6L2qxLKTtMgYr8JQgJJtbRTzyKCdJRiPQSL1z",
  agent: "Agent 0 SOL",
  note: "This relayer is the first test mouth, not a public paymaster. Slot 442304059. Ok/Finalized. Do not send SOL to EcSnayFc or E8Pm8RG6.",
  signature:
    "347rHy86sDvLixMMQjZw8NuE9Qm32yQXdYMBcpiwq9w54DDNF1GvZpLS4bb2FTtyeKtR9nDyL5QUSks1gQuJR22Q",
  href: "https://explorer.solana.com/tx/347rHy86sDvLixMMQjZw8NuE9Qm32yQXdYMBcpiwq9w54DDNF1GvZpLS4bb2FTtyeKtR9nDyL5QUSks1gQuJR22Q",
} as const;


export const whatExistsNow = {
  title: "What exists now",
  lede: "Honest, not a countdown.",
  points: [
    "MAINNET INTENTS is upgraded. pay, pump_buy/sell/create, call, and deploy land on 3HCErAF.",
    "deploy is a grant event (DeployRequested). It does not upload an ELF.",
    "swap is a grant-gated SOL min_out send. Not an AMM. Not Jupiter.",
    "pump is official pump.fun buy_v2 / sell_v2 / create_v2. Trader PDA is user. Vault is never user. Migrated (complete) bonding curves cannot buy_v2.",
    "There is no public sequencer. There are no Grok Chain validators. There is no TVL to invent.",
  ],
  mcp: {
    href: "https://github.com/grokloop/grokchain-mcp",
    text: "cluster=mainnet-beta. pay + pump + call + deploy.",
  },
  use: {
    href: "/docs/use",
    text: "/docs/use",
  },
  close:
    "Each root funds their own vault, paymaster, and relayer. Do not send SOL to EcSnayFc or E8Pm8RG6.",
} as const;

export const easierThanSolana = {
  title: "Is it easier than raw Solana",
  lede: "Easier mouth. Same settlement.",
  lines: [
    "The bot speaks an intent. The grant decides if it may. The receipt still lands on Solana. You did not leave the ground. You stopped making the agent hold the keys.",
    "This page is MAINNET-first. pay, pump, call, and deploy land on the upgraded INTENTS binary. swap is SOL min_out, not an AMM. deploy is a grant event, not an ELF upload. pump is the official pump.fun trade. DEVNET still exists on the old ids if you want to rehearse.",
    "The mouth is easier. The settlement is the same. We will not call that a new L1.",
  ],
} as const;

export const howToUse = {
  kicker: "Use",
  title: "MAINNET walkthrough for a Grok bot.",
  lede: "A human with a wallet. A Grok bot with MCP. pay, pump, call, and deploy are live on Solana MAINNET. The bot never holds a seed or SOL.",
  steps: [
    "Get the MCP: https://github.com/grokloop/grokchain-mcp",
    "Human roots with their wallet. Never give the bot a seed.",
    "Set MAINNET env. CLUSTER=mainnet-beta, RPC, PROGRAM_ID, INTENTS, ROOT_KEYPAIR. There is no setup --mainnet yet. Do not use setup --devnet as the MAINNET path.",
    "Add the MCP to the Grok bot. stdio. Env paths. GROKCHAIN_CLUSTER=mainnet-beta.",
    "Ask the bot to pay a small MAINNET amount, or pump_buy / call / deploy. If setup is missing, the bot says need_human_setup. It does not fake a send.",
  ],
  setupTwoLiner: `export GROKCHAIN_CLUSTER=mainnet-beta
export GROKCHAIN_RPC_URL=https://api.mainnet-beta.solana.com
export GROKCHAIN_PROGRAM_ID=44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd
export GROKCHAIN_INTENTS_PROGRAM_ID=3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw
export GROKCHAIN_ROOT_KEYPAIR=$HOME/.config/solana/id.json
npx -y github:grokloop/grokchain-mcp`,
  close:
    "Pay lands only after root, grant, vaults, and relayer. Each root funds their own vault, paymaster, and relayer. Do not send SOL to EcSnayFc or E8Pm8RG6. Missing any of those is need_human_setup or need_human_signature. Do not fake a send.",
} as const;

export const devnetWalk = {
  cluster: "mainnet-beta",
  mcpUrl: "https://github.com/grokloop/grokchain-mcp",
  mcpRepo: "github.com/grokloop/grokchain-mcp",
  rpcUrl: "https://api.mainnet-beta.solana.com",
  programsHeading: "Live programs — Solana MAINNET",
  programsLede:
    "These are the MAINNET deployed ids (upgraded INTENTS). Explorer links have no cluster query. Token CA 2x4iY5AaiGyRfxzHzSY1KzQJ7K82SDqmkMApwbcRpump is a mint, not these programs. DEVNET rehearsal ids are listed after. Localnet exists in HUMAN.md. Do not treat local-only program ids as live.",
  programs: [
    {
      name: "CORE",
      note: "on Solana MAINNET",
      id: "44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd",
      href: "https://explorer.solana.com/address/44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd",
    },
    {
      name: "INTENTS",
      note: "pay + pump + call + deploy",
      id: "3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw",
      href: "https://explorer.solana.com/address/3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw",
    },
    {
      name: "CORE",
      note: "DEVNET rehearsal",
      id: "7UtafKBBWNHEXC9PaNXu8USdZqL6VEWupsL7rS6LeVDj",
      href: "https://explorer.solana.com/address/7UtafKBBWNHEXC9PaNXu8USdZqL6VEWupsL7rS6LeVDj?cluster=devnet",
    },
    {
      name: "INTENTS",
      note: "DEVNET rehearsal",
      id: "EYhYtqLViS4H3FNt1Q8nGRHGt9oD87uaNsV2WJMNiRkz",
      href: "https://explorer.solana.com/address/EYhYtqLViS4H3FNt1Q8nGRHGt9oD87uaNsV2WJMNiRkz?cluster=devnet",
    },
  ],
  untilHeading: "Setup",
  untilLede:
    "MAINNET is env, not setup --devnet. Set CLUSTER, RPC, PROGRAM_ID, INTENTS, and ROOT_KEYPAIR, then npx the MCP. There is no setup --mainnet yet. HUMAN.md in the repo still has the long form if you need it. DEVNET rehearsal still has setup --devnet.",
  env: `export GROKCHAIN_CLUSTER=mainnet-beta
export GROKCHAIN_RPC_URL=https://api.mainnet-beta.solana.com
export GROKCHAIN_PROGRAM_ID=44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd
export GROKCHAIN_INTENTS_PROGRAM_ID=3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw
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
  --programs 3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw \\
  --sponsor`,
  grantNote:
    "Router-mode allowlist is the MAINNET INTENTS program 3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw, not SystemProgram, never the local-only AXprc... id. --sponsor means sponsor_eligible: this grant may use YOUR paymaster, not a promise Grok Chain pays.",
  vaults: `grokchain vault init-spend
grokchain vault fund-spend --sol 0.05
grokchain paymaster init --relayer "$(grokchain relayer pubkey | python3 -c 'import sys,json; print(json.load(sys.stdin)["pubkey"])')"
grokchain paymaster fund --sol 0.02`,
  vaultsNote:
    "Each root funds their own vault, paymaster, and relayer. SpendVault is the pay source. Paymaster is gas. The bot never holds SOL. Do not send SOL to EcSnayFc or E8Pm8RG6.",
  mcpHeading: "Add the MCP to the Grok bot",
  mcpLede:
    "stdio. npx grokchain-mcp. Point env at paths. GROKCHAIN_CLUSTER=mainnet-beta. Set PROGRAM_ID and INTENTS ids.",
  mcpConfig: `{
  "mcpServers": {
    "grokchain": {
      "command": "npx",
      "args": ["grokchain-mcp"],
      "env": {
        "GROKCHAIN_CLUSTER": "mainnet-beta",
        "GROKCHAIN_RPC_URL": "https://api.mainnet-beta.solana.com",
        "GROKCHAIN_PROGRAM_ID": "44fxwzuEyNxZtgDr87mTtMYYJ1LJm6cB5aZNLyBsPjNd",
        "GROKCHAIN_INTENTS_PROGRAM_ID": "3HCErAFs93FMk2J25Qq1xRRMp6B4FyGvif8ZV8hYxQKw",
        "GROKCHAIN_ROOT_KEYPAIR": "/absolute/path/to/id.json",
        "GROKCHAIN_AGENT_KEYPAIR": "/absolute/path/to/agent.json",
        "GROKCHAIN_RELAYER_KEYPAIR": "/absolute/path/to/relayer.json"
      }
    }
  }
}`,
  rules: [
    "deploy = grant event, not ELF upload. swap = SOL min_out, not AMM. pump = official pump.fun CPI (trader is user). Complete bonding curves cannot buy_v2. 27-account pump_buy needs a v0 tx + address lookup table on public RPC.",
    "sponsor_eligible means this grant may use YOUR paymaster. It is not a promise Grok Chain pays.",
    "Each root funds their own vault, paymaster, and relayer. Do not send SOL to EcSnayFc or E8Pm8RG6.",
    "The bot never holds SOL. Never give the bot a seed.",
  ],
} as const;
