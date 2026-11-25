# Aplikasi Plugins untuk Claude

Marketplace plugin Claude peribadi untuk kerja sales, produktiviti dan coding di [Aplikasi](https://aplikasi.us).

## Cara pasang

1. Dalam Claude, buka **Customize → Plugins**.
2. Klik **Add marketplace** dan masukkan:

   ```
   manhavert/first
   ```

3. Pilih plugin yang dikehendaki, kemudian klik **Install**.
4. Hidupkan **Sync automatically** supaya perubahan dalam repo ini dikemas kini sendiri.

## Plugin yang ada

### sales-helper

| Skill | Fungsi |
|---|---|
| `follow-up-email` | Tulis email follow-up kepada prospek selepas meeting atau demo |

### hermes-skills

Skill yang disesuaikan daripada [Hermes Agent](https://github.com/NousResearch/hermes-agent) oleh NousResearch.

| Skill | Fungsi |
|---|---|
| `systematic-debugging` | Cari punca sebenar bug dalam 4 fasa sebelum membetulkannya |
| `requesting-code-review` | Semak kod sebelum commit: imbasan keselamatan, ujian, lint dan semakan bebas |
| `meeting-action-items` | Tukar nota meeting kepada keputusan, pemilik tugas, tarikh akhir dan draf follow-up |
| `weekly-review-planning` | Semakan mingguan: komitmen, kerja tergendala dan perancangan minggu depan |

### playwright

Automasi pelayar [Playwright](https://playwright.dev) oleh Microsoft. Claude boleh buka laman web, klik, isi borang, ambil tangkapan skrin dan tulis ujian Playwright.

| Skill / Tool | Fungsi |
|---|---|
| `playwright-cli` (skill) | Kawal pelayar melalui arahan `playwright-cli`: navigasi, klik, taip, snapshot, rakaman video, trace, mock request, jana ujian. Lebih jimat token. Dari [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) |
| `playwright` (MCP) | Automasi pelayar melalui MCP server. Dari [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |

Perlu **Node.js 20+** pada komputer anda. Untuk skill `playwright-cli`, pasang CLI sekali:

```bash
npm install -g @playwright/cli@latest
```

MCP server pula dijalankan sendiri dengan `npx @playwright/mcp@latest`.

### caveman

Skill daripada [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman). Claude jawab ringkas tanpa basa-basi, tapi kod, arahan dan mesej ralat kekal tepat.

| Skill | Fungsi |
|---|---|
| `caveman` | Gaya ringkas caveman. Kekal hidup sampai anda kata "stop caveman" |
| `ultracave` | Lebih ringkas lagi: tatabahasa dibuang, fakta sahaja |
| `megacave` | Gaya Cina Klasik (文言文) |
| `caveman-commit` | Mesej commit satu baris (Conventional Commit) |
| `caveman-review` | Semakan kod, satu baris setiap penemuan |
| `caveman-help` | Kad rujukan semua mod dan arahan |
| `cavecrew` | Hantar kerja kepada subagent `cavecrew-investigator`, `cavecrew-builder` dan `cavecrew-reviewer` |
| `investigate-first`, `lean-build`, `surgical-patch`, `safe-refactor`, `migration`, `verify-and-stop` | Corak kerja coding yang tulis kod sesedikit mungkin |

Caveman **tak hidup sendiri**. Taip `/caveman` (atau `/ultracave`, `/megacave`) untuk mula, dan kata "stop caveman" untuk berhenti.

Plugin ini cuma ada bahagian skill. Proxy CLI caveman (jimat token input, Auto, Blocks) dipasang berasingan dengan `npx @caveman-ai/cli@latest`.

### rea

[REA: Reverse Engineer Anything](https://github.com/morluto/rea) oleh morluto. Claude boleh periksa aplikasi tanpa kod sumber (binari native, aplikasi JavaScript/Electron, .NET, Android, firmware, laman web), terangkan cara sesuatu ciri berfungsi berserta bukti, dan bantu bina versi sendiri.

| Skill / Tool | Fungsi |
|---|---|
| `reverse-engineer-anything` (skill) | Panduan siasatan REA: pilih alat, kumpul bukti, decompile, banding versi, bina persekitaran agen |
| `rea` (MCP) | Alat analisis REA melalui MCP server, dijalankan dengan `npx -y rea-agents@6.10.1 mcp` |

Perlu **Node.js** dan npm pada komputer anda. Analisis JavaScript statik tak perlu enjin lain; untuk analisis binari native, pasang salah satu: Hopper, Ghidra, IDA atau Kuna. Analisis berjalan di komputer sendiri. Guna REA hanya untuk perisian yang anda miliki atau dibenarkan untuk dianalisis.

### mengto-3d

Skill 3D untuk laman web Three.js daripada [MengTo/Skills](https://github.com/MengTo/Skills) oleh Meng To.

| Skill | Fungsi |
|---|---|
| `3d-feature-objects` | Bina grid kad ciri dengan objek 3D bercahaya yang berpusing bila hover dan kembali ke pose asal. Ada demo dalam `demo/index.html` |

### blender-rigging

Skill untuk watak 3D dalam Blender (contohnya Jang): bentuk, rig, animasi, render dan eksport. Mixamo tiada API rasmi, jadi fail FBX Mixamo perlu dimuat turun sendiri dari mixamo.com dahulu.

| Skill | Fungsi |
|---|---|
| `scenario-blender-expert` | Asas wajib untuk semua skill scenario: cara jalankan kod Blender, semak hasil, dan perubahan API Blender 5.2 |
| `scenario-blender-rigging` | Rig watak dengan Rigify: metarig, jana rig, weight paint, IK/FK, rig muka, shape key ARKit dan viseme untuk lip sync |
| `scenario-blender-animation` | Animasi watak: kitaran jalan dan lari, lompat, lakonan, lip sync, mata dan muka, timing dan spacing |
| `scenario-blender-sculpting` | Sculpt kepala, muka dan watak kartun atau realistik |
| `scenario-blender-hair` | Rambut dan bulu guna hair curves, termasuk rambut kerinting |
| `scenario-blender-texturing-shading` | Bahan dan tekstur PBR, kulit watak bergaya, kotoran dan kesan haus |
| `scenario-blender-retopology` | Tukar model padat, imbasan atau model AI kepada topologi bersih untuk animasi |
| `scenario-blender-lighting-rendering` | Lampu, HDRI, tetapan EEVEE atau Cycles, dan baiki render yang rata atau bising |
| `scenario-blender-previs-storyboard` | Tukar skrip kepada senarai shot, sudut kamera, storyboard dan animatik |
| `scenario-blender-export` | Eksport ke GLB/glTF untuk Three.js, FBX, USD dan lain-lain, serta baiki skala atau animasi yang rosak selepas eksport |
| `blender-motion-capture` | Import animasi BVH/FBX (termasuk Mixamo), retarget ke rig sendiri guna peta nama tulang, bersihkan data mocap dan eksport |

Perlu Blender 5.x. Skill ini berfungsi dengan alat Blender Lab yang disambungkan ke Claude. Skill scenario lain (uv-baking, blockout, geometry-nodes, hard-surface, grease-pencil) tidak dimasukkan; tambah dari [scenario-labs/skills](https://github.com/scenario-labs/skills) jika perlu.

## Cara guna skill

- **Automatik:** Claude akan guna skill yang sesuai berdasarkan permintaan anda.
- **Manual:** Taip `/` dalam chat dan pilih skill, contohnya `/hermes-skills:systematic-debugging`.

## Struktur repo

```
.claude-plugin/
└── marketplace.json          # Senarai semua plugin
plugins/
├── sales-helper/
│   ├── .claude-plugin/plugin.json
│   └── skills/<nama-skill>/SKILL.md
├── hermes-skills/
│   ├── .claude-plugin/plugin.json
│   └── skills/<nama-skill>/SKILL.md
├── playwright/
│   ├── .claude-plugin/plugin.json
│   ├── .mcp.json             # Konfigurasi MCP server Playwright
│   └── skills/playwright-cli/SKILL.md
├── caveman/
│   ├── .claude-plugin/plugin.json
│   ├── skills/<nama-skill>/SKILL.md
│   └── agents/cavecrew-*.md  # Subagent cavecrew
├── rea/
│   ├── .claude-plugin/plugin.json
│   ├── .mcp.json             # Konfigurasi MCP server REA
│   └── skills/reverse-engineer-anything/
├── mengto-3d/
│   ├── .claude-plugin/plugin.json
│   └── skills/3d-feature-objects/   # SKILL.md + demo/
└── blender-rigging/
    ├── .claude-plugin/plugin.json
    └── skills/
        ├── scenario-blender-<nama>/   # 10 skill: SKILL.md + references/ + scripts/bx_*.py
        └── blender-motion-capture/
```

## Tambah skill baru

1. Buat folder `plugins/<nama-plugin>/skills/<nama-skill>/` dan tambah fail `SKILL.md`.
2. Naikkan `version` dalam `plugin.json` plugin tersebut.
3. Untuk plugin baru, tambah entri dalam `.claude-plugin/marketplace.json`.
4. Dalam Claude, klik **Check for updates** pada marketplace ini.

## Ujian Playwright

Repo ini juga ada ujian pelayar automatik guna [Playwright](https://github.com/microsoft/playwright). Ujian dalam folder `tests/` dijalankan sendiri oleh GitHub Actions setiap kali ada push atau pull request ke `main`.

Untuk jalankan di komputer sendiri (perlu Node.js 20+):

```bash
npm install
npx playwright install chromium
npm test            # jalankan semua ujian
npm run test:ui     # mod UI interaktif
npm run report      # buka laporan HTML
```

Untuk tambah ujian baru, buat fail `tests/<nama>.spec.ts`.

## Kredit

Skill dalam `hermes-skills` diadaptasi daripada [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) di bawah lesen MIT. Sebahagiannya berasal daripada [obra/superpowers](https://github.com/obra/superpowers).

Skill dan subagent dalam `caveman` disalin daripada [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) (v4.1.0) di bawah lesen Apache-2.0. Satu perubahan kecil: baris `caveman-compress` dibuang dari kad `caveman-help`. Lihat `plugins/caveman/LICENSE` dan `NOTICE`. "Caveman" ialah tanda dagangan Julius Brussee.

Skill `playwright-cli` dalam plugin `playwright` disalin tanpa perubahan daripada [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) (v0.1.25) di bawah lesen Apache-2.0. Lihat `plugins/playwright/LICENSE`.

Skill `reverse-engineer-anything` dalam plugin `rea` disalin tanpa perubahan daripada [morluto/rea](https://github.com/morluto/rea) (v6.10.1, skill versi 63) di bawah lesen MIT. MCP server dijalankan terus daripada pakej npm rasmi `rea-agents`. Lihat `plugins/rea/LICENSE`.

Skill `3d-feature-objects` dalam plugin `mengto-3d` disalin tanpa perubahan daripada [MengTo/Skills](https://github.com/MengTo/Skills) di bawah lesen MIT, berserta demo dan salinan Three.js (MIT). Lihat `plugins/mengto-3d/LICENSE` dan `demo/assets/Three-LICENSE.txt`.

10 skill `scenario-blender-*` (expert, rigging, animation, export, sculpting, lighting-rendering, texturing-shading, hair, retopology, previs-storyboard) dalam plugin `blender-rigging` disalin tanpa perubahan daripada [scenario-labs/skills](https://github.com/scenario-labs/skills) (commit 3c4d18c) di bawah lesen MIT. Skill `blender-motion-capture` disalin tanpa perubahan daripada [terminalskills/skills](https://github.com/terminalskills/skills) (commit 4228905) di bawah lesen Apache-2.0. Lihat `plugins/blender-rigging/LICENSE-scenario-MIT` dan `LICENSE-terminalskills-Apache-2.0`.
