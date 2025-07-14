<script lang="ts">
  import { page } from "$app/state";
  import { apps, type App } from "$lib/apps";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { onMount } from "svelte";

  let app: App | undefined = $state(undefined);

  onMount(() => {
    $effect(() => {
      if (page.params.id) {
        app = apps.find((app) => app.id === page.params.id);
      }
    });
  });
</script>

<svelte:head>
  <title>{app?.name || "App Not Found"} | NBRGLM</title>
  <meta
    name="description"
    content={app?.shortDescription || "App details page"}
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://nbrglm.com/apps/${page.params.id}`}
  />
  <meta property="og:title" content={app?.name || "App Not Found"} />
  <meta
    property="og:description"
    content={app?.shortDescription || "App details page"}
  />
  <meta
    property="og:image"
    content={app?.logoUrl || "https://nbrglm.com/images/logo.png"}
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content={`https://nbrglm.com/apps/${page.params.id}`}
  />
  <meta property="twitter:title" content={app?.name || "App Not Found"} />
  <meta
    property="twitter:description"
    content={app?.shortDescription || "App details page"}
  />
  <meta
    property="twitter:image"
    content={app?.logoUrl || "https://nbrglm.com/logo.png"}
  />
</svelte:head>

<div class="p-4 md:p-8">
  {#if app != undefined && app != null}
    <div
      class="flex flex-col md:flex-row items-center justify-start gap-2 md:gap-4"
    >
      <img
        src={`${app.logoUrl}`}
        alt="{app.name}'s Logo"
        class="rounded-lg w-full md:w-1/3 lg:w-1/4 h-auto"
      />
      <Card.Root>
        <Card.Header>
          <Card.Title>{app.name}</Card.Title>
          <Card.Description>{app.shortDescription}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>{app.description}</p>
        </Card.Content>
        <Card.Footer class="flex justify-end gap-2">
          <Button href="#features" variant="outline">View Features</Button>
          {#if app.storeUrl.apple}
            <Button href={app.storeUrl.apple}>View on App Store</Button>
          {/if}
          {#if app.storeUrl.android}
            <Button href={app.storeUrl.android}>View on Play Store</Button>
          {/if}
        </Card.Footer>
      </Card.Root>
    </div>

    <div id="features" class="p-8">
      <Card.Root>
        <Card.Header>
          <Card.Title>Features</Card.Title>
          <Card.Description
            >What makes this app better than the competition</Card.Description
          >
        </Card.Header>
        <Card.Content>
          <p class="text-lg whitespace-pre-line">{app.features}</p>
        </Card.Content>
        <Card.Footer class="justify-end gap-2">
          {#if app.storeUrl.apple}
            <Button href={app.storeUrl.apple}>View on App Store</Button>
          {/if}
          {#if app.storeUrl.android}
            <Button href={app.storeUrl.android}>View on Play Store</Button>
          {/if}
        </Card.Footer>
      </Card.Root>
    </div>
  {:else}
    <div
      class="flex flex-col items-center justify-center min-h-screen p-4 text-center"
    >
      <h1 class="text-2xl font-bold mb-4">
        Oops! You've followed a broken link
      </h1>
      <p class="mb-6">The app you're looking for doesn't seem to exist.</p>
      <Button href="/">Visit Homepage Instead</Button>
    </div>
  {/if}
</div>
