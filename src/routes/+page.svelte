<script lang="ts">
  import { apps } from "$lib/apps";
  import SafariMock from "$lib/components/safari-mock/SafariMock.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import { Separator } from "$lib/components/ui/separator";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";

  import { animate, inView } from "motion";

  function animateXSpanOnLoad(
    elem: HTMLSpanElement,
    data: { index: number; initialX?: number },
  ): any {
    const delay = (data.index - 1) * 0.8;
    inView(elem, (element) => {
      animate(
        element,
        {
          x: [data.initialX ?? 200, 0],
          opacity: [0, 1],
        },
        {
          duration: 0.7,
          ease: "easeOut",
          delay: delay,
        },
      );

      return () => animate(element, { opacity: 0 }, { duration: 0.7 });
    });
  }

  function animateYSpanOnLoad(
    elem: HTMLSpanElement,
    data: { index: number; initialY?: number },
  ): any {
    const delay = (data.index - 1) * 0.8;
    inView(elem, (element) => {
      animate(
        element,
        {
          y: [data.initialY ?? 100, 0],
          opacity: [0, 1],
          scale: [0.8, 1],
        },
        {
          duration: 0.7,
          ease: "easeOut",
          delay: delay,
        },
      );

      return () => animate(element, { opacity: 0 }, { duration: 0.7 });
    });
  }

  let mockWidth = $state(300);
  let mockHeight = $state(500);

  let isMobile = new IsMobile();
  $effect(() => {
    mockWidth = isMobile.current ? 300 : 1200;
    mockHeight = isMobile.current ? 500 : 700;
  });
</script>

<svelte:head>
  <title>NBRGLM Developers</title>
  <meta
    name="description"
    content="NBRGLM Developers is a software development company that builds secure, scalable, and reliable software to power what's next."
  />
  <meta property="og:title" content="NBRGLM Developers" />
  <meta
    property="og:description"
    content="NBRGLM Developers is a software development company that builds secure, scalable, and reliable software to power what's next."
  />
  <meta property="og:image" content="https://nbrglm.com/images/logo.png" />
  <meta property="og:url" content="https://nbrglm.com" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="NBRGLM Developers" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NBRGLM Developers" />
  <meta
    name="twitter:description"
    content="NBRGLM Developers is a software development company that builds secure, scalable, and reliable software to power what's next."
  />
  <meta name="twitter:image" content="https://nbrglm.com/images/logo.png" />
  <meta name="twitter:url" content="https://nbrglm.com" />
  <meta name="twitter:site" content="@nbrglm" />
  <meta name="twitter:creator" content="@nbrglm" />
  <link rel="icon" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
</svelte:head>

<section
  class="h-dvh flex flex-col justify-center items-center gap-2 p-4 md:p-8"
>
  <span
    class="bg-gradient-to-r dark:to-[#341a6a] dark:from-[#cee8e4] from-[#709c96] to-[#341a6a] text-transparent bg-clip-text text-6xl"
    use:animateYSpanOnLoad={{ index: 1 }}
    >Crafting Software That Powers the Future</span
  >
  <span
    class="text-muted-foreground text-lg"
    use:animateYSpanOnLoad={{ index: 2, initialY: 100 }}
    >From intuitive software products to foundational, future-ready systems</span
  ><span
    class="text-muted-foreground text-lg font-bold"
    use:animateYSpanOnLoad={{ index: 2, initialY: 100 }}
    >We build secure, scalable, and reliable software to power what's next.
  </span>
  <div class="flex flex-row items-center justify-center gap-2">
    <Button
      href="#about"
      onuse={(elem) => animateYSpanOnLoad(elem, { index: 3, initialY: 50 })}
      >About</Button
    >
    <Button
      href="#apps"
      onuse={(elem) => animateYSpanOnLoad(elem, { index: 3, initialY: 50 })}
      >Explore our work</Button
    >
  </div>
</section>

<section
  id="about"
  class="flex flex-col justify-center items-start gap-2 p-4 md:p-8"
>
  <span
    class="bg-gradient-to-r dark:to-[#341a6a] dark:from-[#cee8e4] from-[#709c96] to-[#341a6a] text-transparent bg-clip-text text-3xl md:text-6xl mb-4"
    use:animateXSpanOnLoad={{ index: 1 }}>About us</span
  >
  <div class="flex flex-col h-full justify-evenly gap-2">
    <div class="flex flex-col md:flex-row gap-2">
      <Card.Root class="flex flex-row">
        <Card.Header>
          <Card.Title class="w-full"
            ><span class="text-foreground" use:animateXSpanOnLoad={{ index: 1 }}
              >The purpose</span
            ></Card.Title
          >
        </Card.Header>
        <Card.Content>
          <p class="text-muted-foreground">
            At NBRGLM Developers, we build software that's both practical and
            powerful — from everyday tools like dialers and encrypted journals
            to full-scale platforms for education and secure data storage.
          </p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="flex flex-row">
        <Card.Header>
          <Card.Title class="w-full"
            ><span class="text-foreground" use:animateXSpanOnLoad={{ index: 1 }}
              >Our Approach</span
            ></Card.Title
          >
        </Card.Header>
        <Card.Content>
          <p class="text-muted-foreground">
            We take pride in building from first principles when needed —
            including R&D toward a custom operating system and the potential
            development of a purpose-built language to support it.
          </p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="flex flex-row">
        <Card.Header>
          <Card.Title class="w-full"
            ><span class="text-foreground" use:animateXSpanOnLoad={{ index: 1 }}
              >Our Mission</span
            ></Card.Title
          >
        </Card.Header>
        <Card.Content>
          <p class="text-muted-foreground">
            Whether we're designing interfaces or engineering infrastructure,
            our focus is clear: secure, scalable, and future-ready software
            architectures that power modern use cases.
          </p>
        </Card.Content>
      </Card.Root>
    </div>

    <Card.Root class="p-0 m-0">
      <Card.Content class="flex flex-row gap-2 justify-evenly">
        <div class="flex flex-col gap-2 items-center justify-center">
          <span class="text-foreground text-3xl text-center">100+</span>
          <span class="text-muted-foreground text-base text-center">Users</span>
        </div>
        <Separator orientation="vertical" />
        <div class="flex flex-col gap-2 items-center justify-center">
          <span class="text-foreground text-3xl text-center">4</span>
          <span class="text-muted-foreground text-base text-center"
            >Solutions Deployed</span
          >
        </div>
        <Separator orientation="vertical" />
        <div class="flex flex-col gap-2 items-center justify-center">
          <span class="text-foreground text-3xl text-center">80</span>
          <span class="text-muted-foreground text-base text-center"
            >Downloads</span
          >
        </div>
      </Card.Content>
    </Card.Root>
  </div>
</section>

<section
  id="nossedu"
  class="flex flex-col justify-center items-center gap-2 p-4 md:p-8"
>
  <SafariMock url="https://euniz.com" height={mockHeight} width={mockWidth} />
</section>

<section
  id="apps"
  class="m-10 flex flex-col justify-center items-start gap-2 p-4 md:p-8"
>
  <span class="text-3xl md:text-6xl" use:animateXSpanOnLoad={{ index: 1 }}
    >Our Apps</span
  >
  <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-2 my-10">
    {#each apps as app}
      <Card.Root>
        <Card.Header>
          <img
            src={app.logoUrl}
            alt={app.name}
            class="object-cover max-w-sm rounded-md shadow-md"
          />
          <Card.Title>{app.name}</Card.Title>
        </Card.Header>
        <Card.Content>
          <Card.Description>{app.shortDescription}</Card.Description>
        </Card.Content>
        <Card.Footer>
          <Button variant="outline" class="w-full" href="/apps/{app.id}"
            >View More</Button
          >
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
</section>
