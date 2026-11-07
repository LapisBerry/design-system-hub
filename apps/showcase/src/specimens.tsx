import { useState, type ReactNode } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Code,
  Dialog,
  Divider,
  Field,
  Heading,
  IconButton,
  Input,
  Kbd,
  Progress,
  RadioGroup,
  Select,
  Slider,
  Spinner,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  Textarea,
  Tooltip,
  useDesignSystem,
} from "@dsh/core";
import {
  ArrowRightIcon,
  BellIcon,
  CheckCircleIcon,
  DownloadIcon,
  ErrorIcon,
  HeartIcon,
  InfoIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
  WarningIcon,
} from "./icons.tsx";

/* Layout helpers that only use tokens, so they adapt to each theme. */
export function Row({ children, gap = 3, wrap = true, align = "center" }: { children: ReactNode; gap?: number; wrap?: boolean; align?: string }) {
  return <div style={{ display: "flex", gap: `var(--ds-space-${gap})`, flexWrap: wrap ? "wrap" : "nowrap", alignItems: align }}>{children}</div>;
}
export function Stack({ children, gap = 4 }: { children: ReactNode; gap?: number }) {
  return <div style={{ display: "flex", flexDirection: "column", gap: `var(--ds-space-${gap})` }}>{children}</div>;
}
function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="spec-section">
      <div className="spec-section__head">
        <Heading level={3} size={2}>{title}</Heading>
        {description && <Text muted size="sm">{description}</Text>}
      </div>
      {children}
    </section>
  );
}

/* ---------- Individual specimens (also used by the Compare view) ---------- */

export function ButtonsSpecimen() {
  return (
    <Stack gap={4}>
      <Row>
        <Button>Primary action</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </Row>
      <Row>
        <Button tone="accent" startIcon={<PlusIcon />}>New project</Button>
        <Button tone="neutral" variant="outline" endIcon={<ArrowRightIcon />}>Continue</Button>
        <Button tone="danger" variant="soft" startIcon={<TrashIcon />}>Delete</Button>
      </Row>
      <Row>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
      </Row>
      <Row>
        <IconButton label="Like" icon={<HeartIcon />} variant="soft" />
        <IconButton label="Notifications" icon={<BellIcon />} variant="outline" tone="neutral" />
        <Tooltip content="Settings for this workspace">
          <IconButton label="Settings" icon={<SettingsIcon />} variant="ghost" tone="neutral" />
        </Tooltip>
        <Text size="sm" muted as="span">Hover or focus the gear for a tooltip</Text>
      </Row>
    </Stack>
  );
}

export function FormSpecimen() {
  const [plan, setPlan] = useState("team");
  return (
    <div className="spec-grid-2">
      <Stack gap={4}>
        <Field label="Full name" required>
          <Input placeholder="Ada Lovelace" defaultValue="" />
        </Field>
        <Field label="Email" hint="We'll only use this for receipts.">
          <Input type="email" placeholder="ada@example.com" startAdornment={<MailIcon />} />
        </Field>
        <Field label="Username" error="That username is already taken.">
          <Input defaultValue="ada" />
        </Field>
        <Field label="Region">
          <Select defaultValue="eu">
            <option value="us">United States</option>
            <option value="eu">Europe</option>
            <option value="apac">Asia Pacific</option>
          </Select>
        </Field>
      </Stack>
      <Stack gap={4}>
        <Field label="Bio">
          <Textarea placeholder="A few words about you" rows={3} />
        </Field>
        <RadioGroup
          legend="Plan"
          value={plan}
          onChange={setPlan}
          options={[
            { value: "solo", label: "Solo", description: "One seat, all the basics." },
            { value: "team", label: "Team", description: "Up to 20 seats and shared spaces." },
            { value: "org", label: "Organization", description: "Unlimited seats, SSO.", disabled: true },
          ]}
        />
      </Stack>
    </div>
  );
}

export function ChoicesSpecimen() {
  const [vol, setVol] = useState(64);
  return (
    <div className="spec-grid-2">
      <Stack gap={3}>
        <Checkbox label="Email me about product updates" defaultChecked />
        <Checkbox label="Share anonymous usage data" description="Helps us find slow pages." />
        <Checkbox label="Disabled option" disabled />
      </Stack>
      <Stack gap={4}>
        <Switch label="Notifications" defaultChecked />
        <Switch label="Compact mode" />
        <Slider label="Volume" value={vol} onValueChange={setVol} formatValue={(v) => `${v}%`} />
      </Stack>
    </div>
  );
}

export function FeedbackSpecimen() {
  return (
    <Stack gap={3}>
      <Alert tone="info" icon={<InfoIcon />} title="A new version is available">Reload to get the latest features.</Alert>
      <Alert tone="success" icon={<CheckCircleIcon />} title="Payment received">Your invoice has been emailed to you.</Alert>
      <Alert tone="warning" icon={<WarningIcon />} title="Storage almost full" action={<Button size="sm" variant="outline" tone="neutral">Upgrade</Button>}>
        You've used 92% of your space.
      </Alert>
      <Alert tone="danger" icon={<ErrorIcon />} title="Deploy failed">Build step exited with code 1.</Alert>
      <Stack gap={2}>
        <Progress label="Upload progress" value={68} />
        <Progress label="Syncing" tone="accent" />
      </Stack>
      <Row>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </Row>
    </Stack>
  );
}

export function DisplaySpecimen() {
  return (
    <Stack gap={4}>
      <Row gap={2}>
        <Badge>Neutral</Badge>
        <Badge tone="primary">Primary</Badge>
        <Badge tone="accent" variant="solid">Accent</Badge>
        <Badge tone="success">Active</Badge>
        <Badge tone="warning" variant="outline">Pending</Badge>
        <Badge tone="danger" variant="solid">Overdue</Badge>
        <Badge tone="info">Beta</Badge>
      </Row>
      <Row gap={3}>
        <Avatar name="Ada Lovelace" size="sm" />
        <Avatar name="Grace Hopper" />
        <Avatar name="Katherine Johnson" size="lg" />
        <Text as="span" size="sm" muted>
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search, or run <Code>npm run dev</Code>
        </Text>
      </Row>
      <div className="spec-grid-3">
        <Card variant="elevated">
          <Stack gap={2}>
            <Heading level={4} size={1}>Elevated</Heading>
            <Text size="sm" muted>Default card for grouped content.</Text>
          </Stack>
        </Card>
        <Card variant="outlined">
          <Stack gap={2}>
            <Heading level={4} size={1}>Outlined</Heading>
            <Text size="sm" muted>For dense layouts and lists.</Text>
          </Stack>
        </Card>
        <Card variant="filled" interactive tabIndex={0}>
          <Stack gap={2}>
            <Heading level={4} size={1}>Filled</Heading>
            <Text size="sm" muted>Interactive: hover me.</Text>
          </Stack>
        </Card>
      </div>
    </Stack>
  );
}

export function NavigationSpecimen() {
  return (
    <Stack gap={6}>
      {(["line", "pill", "enclosed"] as const).map((variant) => (
        <Tabs key={variant} defaultValue="overview" variant={variant}>
          <TabList label={`${variant} tabs example`}>
            <Tab value="overview">Overview</Tab>
            <Tab value="activity">Activity</Tab>
            <Tab value="settings">Settings</Tab>
            <Tab value="billing" disabled>Billing</Tab>
          </TabList>
          <TabPanel value="overview"><Text size="sm" muted>“{variant}” tabs. Use the arrow keys to move between them.</Text></TabPanel>
          <TabPanel value="activity"><Text size="sm" muted>Recent activity shows up here.</Text></TabPanel>
          <TabPanel value="settings"><Text size="sm" muted>Workspace settings live here.</Text></TabPanel>
        </Tabs>
      ))}
      <Accordion
        single
        defaultOpen={["a"]}
        items={[
          { id: "a", title: "What is a design token?", content: "A named value, such as a color or a spacing step, that every component reads instead of hard-coding." },
          { id: "b", title: "Can I mix systems on one page?", content: "Yes. Each provider scopes its tokens to its own subtree, which is how this showcase works." },
          { id: "c", title: "Does it work with a keyboard?", content: "Every component supports keyboard use and visible focus." },
        ]}
      />
    </Stack>
  );
}

export function OverlaySpecimen() {
  const [open, setOpen] = useState(false);
  return (
    <Row>
      <Button variant="outline" tone="neutral" onClick={() => setOpen(true)}>Open dialog</Button>
      <Tooltip content="Tooltips appear on hover and on keyboard focus">
        <Button variant="ghost">Hover for tooltip</Button>
      </Tooltip>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Invite your team"
        description="They'll get an email with a link to join this workspace."
        footer={
          <>
            <Button variant="ghost" tone="neutral" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Send invites</Button>
          </>
        }
      >
        <Field label="Email addresses" hint="Separate several with commas.">
          <Input placeholder="sam@example.com, lee@example.com" autoFocus />
        </Field>
      </Dialog>
    </Row>
  );
}

export function TypographySpecimen() {
  const { theme } = useDesignSystem();
  return (
    <Stack gap={3}>
      <Heading level={1} size={6}>{theme.meta.tagline}</Heading>
      <Heading level={2} size={4}>A heading for sections</Heading>
      <Heading level={3} size={2}>Smaller heading for cards</Heading>
      <Text size="lg">{theme.meta.description}</Text>
      <Text muted>
        Body copy is set at {theme.type.baseSize}px with a {theme.type.lineHeight} line height. Headings step up a{" "}
        {theme.type.scaleRatio} modular scale.
      </Text>
    </Stack>
  );
}

/* ---------- A realistic composed screen ---------- */

export function SampleScreen() {
  const { theme } = useDesignSystem();
  const [saved, setSaved] = useState(false);
  return (
    <div className="spec-sample">
      <Card variant="elevated" padding="lg">
        <Stack gap={5}>
          <Row align="flex-start" wrap={false}>
            <Avatar name="Rin Nakamura" size="lg" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <Row gap={2}>
                <Heading level={3} size={3}>Rin Nakamura</Heading>
                <Badge tone="success">Pro</Badge>
              </Row>
              <Text muted size="sm">Product designer · Joined March 2025</Text>
            </div>
            <IconButton label="Notifications" icon={<BellIcon />} variant="ghost" tone="neutral" />
          </Row>

          <Tabs defaultValue="profile">
            <TabList label="Account sections">
              <Tab value="profile">Profile</Tab>
              <Tab value="team">Team</Tab>
              <Tab value="usage">Usage</Tab>
            </TabList>
            <TabPanel value="profile">
              <Stack gap={4}>
                <div className="spec-grid-2">
                  <Field label="Display name"><Input defaultValue="Rin Nakamura" /></Field>
                  <Field label="Search projects"><Input placeholder="Type to filter" startAdornment={<SearchIcon />} /></Field>
                </div>
                <Switch label="Show my status to teammates" defaultChecked />
                <Checkbox label={`Use the ${theme.meta.name} theme everywhere`} defaultChecked />
                {saved && <Alert tone="success" icon={<CheckCircleIcon />} title="Changes saved" />}
                <Row>
                  <Button onClick={() => setSaved(true)}>Save changes</Button>
                  <Button variant="ghost" tone="neutral" onClick={() => setSaved(false)}>Cancel</Button>
                </Row>
              </Stack>
            </TabPanel>
            <TabPanel value="team">
              <Stack gap={3}>
                {["Ada Lovelace", "Grace Hopper", "Alan Kay"].map((n, i) => (
                  <Row key={n} wrap={false}>
                    <Avatar name={n} size="sm" />
                    <Text as="span" style={{ flex: 1 }}>{n}</Text>
                    <Badge tone={i === 0 ? "primary" : "neutral"}>{i === 0 ? "Owner" : "Editor"}</Badge>
                  </Row>
                ))}
                <Divider />
                <Button variant="soft" startIcon={<PlusIcon />}>Invite member</Button>
              </Stack>
            </TabPanel>
            <TabPanel value="usage">
              <Stack gap={3}>
                <Progress label="Storage" value={72} />
                <Text size="sm" muted>7.2 GB of 10 GB used</Text>
                <Button variant="outline" tone="neutral" startIcon={<DownloadIcon />}>Export data</Button>
              </Stack>
            </TabPanel>
          </Tabs>
        </Stack>
      </Card>
    </div>
  );
}

/** A small preview used on the gallery cards. */
export function MiniPreview() {
  const { theme } = useDesignSystem();
  return (
    <Stack gap={4}>
      <Stack gap={1}>
        <Heading level={3} size={4}>{theme.meta.name}</Heading>
        <Text muted size="sm">{theme.meta.tagline}</Text>
      </Stack>
      <Row gap={2}>
        <Button size="sm">Get started</Button>
        <Button size="sm" variant="outline" tone="neutral">Docs</Button>
        <Badge tone="accent" variant="solid">New</Badge>
      </Row>
      <Card variant="outlined" padding="sm">
        <Stack gap={3}>
          <Input size="sm" placeholder="Search components" startAdornment={<SearchIcon />} aria-label="Search components" />
          <Row gap={3} wrap={false}>
            <Switch label="Live" defaultChecked />
            <div style={{ flex: 1 }}><Progress label="Progress" value={60} /></div>
          </Row>
        </Stack>
      </Card>
    </Stack>
  );
}

/* ---------- The full component sheet ---------- */

export const SPECIMENS = [
  { id: "buttons", title: "Buttons", description: "Four variants, four tones, three sizes, loading and icon-only.", Component: ButtonsSpecimen },
  { id: "forms", title: "Form fields", description: "Field wires up label, hint and error for screen readers.", Component: FormSpecimen },
  { id: "choices", title: "Checkbox, switch and slider", description: "Native inputs underneath, so forms submit as usual.", Component: ChoicesSpecimen },
  { id: "feedback", title: "Feedback", description: "Alerts, progress and spinners.", Component: FeedbackSpecimen },
  { id: "display", title: "Data display", description: "Badges, avatars, keyboard keys and cards.", Component: DisplaySpecimen },
  { id: "navigation", title: "Navigation", description: "Tabs in three variants and an accordion.", Component: NavigationSpecimen },
  { id: "overlays", title: "Overlays", description: "Modal dialog and tooltip.", Component: OverlaySpecimen },
  { id: "sample", title: "Sample screen", description: "Components composed into a realistic settings page.", Component: SampleScreen },
] as const;

export function ComponentSheet() {
  return (
    <Stack gap={10}>
      {SPECIMENS.map(({ id, title, description, Component }) => (
        <Section key={id} title={title} description={description}>
          <Component />
        </Section>
      ))}
    </Stack>
  );
}
