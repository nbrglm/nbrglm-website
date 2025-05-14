<script lang="ts">
  import { goto } from "$app/navigation";
  import type { IconName } from "$lib/components/icon";
  import Icon from "$lib/components/icon/Icon.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import { ChevronRight } from "lucide-svelte";

  type MinCardData = { title: string; icon: IconName; desc: string };

  let features: MinCardData[] = [
    {
      title: "Sleek, Distraction-Free UI",
      icon: "Sidebar",
      desc: "A clean, minimal interface that stays out of your way and lets you focus on what matters.",
    },
    {
      title: "Modern Security, Built-In",
      icon: "Shield",
      desc: "Advanced security features protect your data and privacy without compromising usability.",
    },
    {
      title: "Powerful under the hood",
      icon: "Zap",
      desc: "Optimized performance that makes the most of your hardware, whether new or old.",
    },
    {
      title: "Free and Open Source",
      icon: "Code",
      desc: "Transparent, community-driven development that puts users first, not profit.",
    },
  ];

  let reasons: MinCardData[] = [
    {
      title: "Fast, Responsive Core",
      icon: "Zap",
      desc: "Optimized for speed and efficiency on any hardware.",
    },
    {
      title: "Privacy-Respecting, By Design",
      icon: "Lock",
      desc: "Your data belongs to you, not to corporations. No Ads, No Tracking.",
    },
    {
      title: "Intuitive Interface",
      icon: "Monitor",
      desc: "Designed to be immediately familiar yet refreshingly modern.",
    },
    {
      title: "Built for Today, Ready for Tomorrow",
      icon: "Rocket",
      desc: "Constantly evolving with community-driven innovation.",
    },
  ];

  let isMobile = new IsMobile();
</script>

<svelte:head>
  <title>Agohya OS | Open. Elegant. Yours.</title>
  <meta
    name="description"
    content="Agohya is a refined, open-source operating system that brings power, security, and modern design to everyone."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nbrglm.com/agohya" />
  <meta property="og:title" content="Agohya OS | Open. Elegant. Yours." />
  <meta
    property="og:description"
    content="Agohya is a refined, open-source operating system that brings power, security, and modern design to everyone."
  />
  <meta
    property="og:image"
    content="https://nbrglm.com/images/logos/agohya-logo.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://nbrglm.com/agohya" />
  <meta property="twitter:title" content="Agohya OS | Open. Elegant. Yours." />
  <meta
    property="twitter:description"
    content="Agohya is a refined, open-source operating system that brings power, security, and modern design to everyone."
  />
  <meta
    property="twitter:image"
    content="https://nbrglm.com/images/logos/agohya-logo.jpg"
  />

  <!-- twitter card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://nbrglm.com/agohya" />
  <meta name="twitter:title" content="Agohya OS | Open. Elegant. Yours." />
  <meta
    name="twitter:description"
    content="Agohya is a refined, open-source operating system that brings power, security, and modern design to everyone."
  />
  <meta
    name="twitter:image"
    content="https://nbrglm.com/images/logos/agohya-logo.jpg"
  />
  <meta name="twitter:site" content="@nbrglm" />
  <meta name="twitter:creator" content="@nbrglm" />
  <meta name="twitter:image:alt" content="Agohya OS" />
  <meta name="twitter:label1" content="Company:" />
  <meta name="twitter:data1" content="NBRGLM" />
  <meta name="twitter:label2" content="Product:" />
  <meta name="twitter:data2" content="Operating System" />

  <!-- WhatsApp -->
  <meta property="og:site_name" content="NBRGLM" />
  <meta property="og:locale" content="en_US" />
</svelte:head>

<div class="flex flex-col justify-start items-start gap-4">
  <!-- Main Section -->
  <div
    class="md:h-dvh flex flex-col-reverse md:flex-row gap-2 md:gap-4 mx-4 md:mx-12 justify-evenly md:justify-between items-center"
  >
    <div class="flex flex-col md:w-1/2 w-full items-start max-w-xl gap-4">
      <h1 class="text-4xl md:text-5xl font-bold">
        An Operating System, Like No Other.
      </h1>
      <p class="text-xl text-muted-foreground text-start">
        Agohya is a refined, open-source operating system that brings power,
        security, and modern design to everyone.
      </p>
      <div class="flex flex-row gap-2">
        <Button onclick={() => goto("/agohya/dl")}
          >Download <ChevronRight />
        </Button>
        <Button
          variant="outline"
          href="https://github.com/nbrglm/agohya"
          target="_blank"
          ><svg
            role="img"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>GitHub</title><path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            /></svg
          >Github</Button
        >
      </div>
    </div>
    <img
      src="/images/logos/agohya-logo.png"
      alt="Agohya OS Logo"
      class="rounded-lg shadow-md w-full md:w-1/3"
    />
  </div>

  <!-- A Section -->
  <div class="flex flex-row justify-center items-center w-full md:pt-0 pt-40">
    <div
      class="md:h-dvh flex flex-col gap-2 md:gap-4 justify-center items-center max-w-3xl"
    >
      <h1 class="text-center text-3xl md:text-4xl font-bold">
        A system that adapts to you.
      </h1>
      <p class="text-xl text-muted-foreground text-center">
        Agohya combines performance, elegance, and control — built to empower
        users without overwhelming them. It's designed to be intuitive yet
        powerful, giving you the tools you need without getting in your way.
      </p>
      <div class="flex flex-row gap-2">
        <Button href="#features">Features</Button>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div
    id="features"
    class="md:h-dvh flex flex-col md:flex-row gap-2 md:gap-4 mx-4 md:mx-12 justify-evenly md:justify-between items-center md:pt-0 pt-40"
  >
    <div class="flex flex-col md:w-1/2 w-full items-start max-w-xl gap-4">
      <h1 class="text-4xl md:text-5xl font-bold">
        Designed for humans, built for the future
      </h1>
      <p class="text-xl text-muted-foreground text-start">
        Agohya brings together the best of all worlds — the polish of commercial
        systems with the freedom of open source.
      </p>
    </div>
    <div
      class="w-full flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2 md:w-2/5"
    >
      {#each features as feature}
        <Card.Root>
          <Card.Header class="gap-2 mb-2">
            <Icon class="text-violet-500" name={feature.icon} />
            <Card.Title>{feature.title}</Card.Title>
            <Card.Description>{feature.desc}</Card.Description>
          </Card.Header>
        </Card.Root>
      {/each}
    </div>
  </div>

  <!-- Image Section -->
  <div
    id="glimpse"
    class="md:h-dvh flex flex-col justify-center items-center w-full md:pt-0 pt-40 gap-4"
  >
    <div
      class="flex flex-col gap-2 md:gap-4 justify-center items-center max-w-3xl"
    >
      <h1 class="text-center text-3xl md:text-4xl font-bold">
        See Agohya in action
      </h1>
      <p class="text-xl text-muted-foreground text-center">
        A glimpse of an elegant computing experience.
      </p>
    </div>
    <img
      src="/images/agohya-desktop.png"
      alt="Agohya OS Logo"
      class="rounded-xl shadow-md w-5/6 md:w-3/5"
    />
  </div>

  <!-- Why choose Agohya Section -->
  <div
    id="features"
    class="md:h-dvh flex flex-col md:flex-row gap-2 md:gap-4 mx-4 md:mx-12 justify-evenly md:justify-between items-center md:pt-0 pt-40"
  >
    <div class="flex flex-col md:w-1/2 w-full items-start max-w-xl gap-4">
      <h1 class="text-4xl md:text-5xl font-bold">Why Agohya?</h1>
      <p class="text-xl text-muted-foreground text-start">
        An operating system that respects your time, your privacy, and your
        freedom.
      </p>
    </div>
    <div class="w-full flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-4">
      {#each reasons as reason}
        <Card.Root>
          <Card.Header class="gap-2 mb-2">
            <Icon class="text-violet-500" name={reason.icon} />
            <Card.Title>{reason.title}</Card.Title>
            <Card.Description>{reason.desc}</Card.Description>
          </Card.Header>
        </Card.Root>
      {/each}
    </div>
  </div>

  {#if isMobile.current}
    <div
      class="w-full flex flex-row justify-center items-center md:py-0 py-20 gap-2"
    >
      <Button onclick={() => goto("/agohya/dl")}
        >Download <ChevronRight />
      </Button>
    </div>
  {/if}
</div>
