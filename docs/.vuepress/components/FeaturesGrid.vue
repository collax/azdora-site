<template>
  <div>
    <div class="az-features">
      <div class="az-feature">
        <div class="feature-icon">🧭</div>
        <div class="feature-title">Exploration & World</div>
        <div class="feature-body">
          Explore the mythical land of Azdora, a fractured world shaped by divine interference. A lore-rich and handcrafted world full of questlines, dynamic NPCs, hostile mobs, and secrets to be unveiled.
        </div>
      </div>

      <div class="az-feature">
        <div class="feature-icon">⚔️</div>
        <div class="feature-title">Flexible Progression</div>
        <div class="feature-body">
          Become more powerful through a wide range of activities—questing, exploration, dungeons, crafting, PvE, PvP, and events—without restricting yourself to a single path of progress.
        </div>
      </div>

      <div class="az-feature">
        <div class="feature-icon">🛠️</div>
        <div class="feature-title">Character & Gear Systems</div>
        <div class="feature-body">
          Create and improve your character with a progression system driven by a variety of item and skill sets where gear provides meaningful effects and synergies, allowing multiple viable playstyles instead of fixed meta builds or best-in-slot paths.
        </div>
      </div>

      <div class="az-feature">
        <div class="feature-icon">🏰</div>
        <div class="feature-title">Legendary Dungeons</div>
        <div class="feature-body">
          Raid legendary dungeons, designed as long-form adventures with variable paths, objectives, and outcomes, where preparation, supplies, enemy knowledge, and lore investigation directly impact your success.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.az-features{display:grid;gap:18px;margin:24px 0;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;align-items:stretch}
:root{--card-bg:linear-gradient(180deg,#0f2630,#122a34);--card-solid:#0d1b20;--card-border:rgba(255,255,255,0.06);--title-color:#ffffff;--text-color:#c9dde2;--icon-accent:#ffbf69}
.az-feature{display:flex;flex-direction:column;padding:20px;border-radius:12px;background:var(--card-bg);border:1px solid var(--card-border);box-shadow:0 8px 24px rgba(3,6,10,0.5);height:100%;min-height:0;transition:transform .18s ease,box-shadow .18s ease}
.feature-icon{font-size:28px;margin-bottom:10px;color:var(--icon-accent)}
.feature-title{font-weight:700;margin-bottom:8px;color:var(--title-color)}
.az-feature > .feature-body{color:var(--text-color);line-height:1.45;margin-top:0;overflow:auto}
.az-feature:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(3,6,10,0.6)}
.feature-icon{filter:drop-shadow(0 1px 0 rgba(0,0,0,0.4))}
.az-features{margin:24px 0}

@media (max-width:900px){
  .az-features{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:480px){
  .az-features{grid-template-columns:repeat(1,1fr)}
  .az-feature{padding:14px}
}
.lore{margin-top:24px;color:var(--text-color)}

/* CTA button styles used on landing page */
.cta-button{display:inline-block;background:#5865f2;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:700}
.cta-button:hover{background:#4752d8}
</style>
