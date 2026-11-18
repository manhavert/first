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

MCP server [Playwright](https://github.com/microsoft/playwright-mcp) oleh Microsoft. Claude boleh buka laman web, klik, isi borang dan ambil tangkapan skrin dalam pelayar sebenar.

| Tool | Fungsi |
|---|---|
| `playwright` (MCP) | Automasi pelayar: navigasi, klik, taip, snapshot halaman, tangkapan skrin |

Perlu **Node.js 18+** pada komputer anda (server dijalankan dengan `npx @playwright/mcp@latest`).

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

Plugin ini cuma ada bahagian skill. Proxy CLI caveman (jimat token input, Auto, Blocks) dipasang berasingan dengan `npx @caveman-ai/cli@latest`.

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
│   └── .mcp.json             # Konfigurasi MCP server Playwright
└── caveman/
    ├── .claude-plugin/plugin.json
    ├── skills/<nama-skill>/SKILL.md
    └── agents/cavecrew-*.md  # Subagent cavecrew
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

Skill dan subagent dalam `caveman` disalin daripada [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) (v4.1.0) di bawah lesen Apache-2.0. Lihat `plugins/caveman/LICENSE` dan `NOTICE`. "Caveman" ialah tanda dagangan Julius Brussee.
