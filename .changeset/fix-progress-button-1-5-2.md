---
'retro-react': patch
---

Two small fixes found in real-consumer testing of 1.5.1.

ProgressBar animation loop now cycles seamlessly. The previous shift of `8px` per cycle was the stripe period along the gradient axis, but at 45 degrees that projects to `8 / √2` ≈ 5.66 horizontal pixels, not 8. The pattern was almost-but-not-quite returning to the same visual position at the loop boundary and you could see the jump. The shift is now `8 × √2` ≈ 11.31px, which is exactly one stripe period along the diagonal.

Button heights now actually match form fields. 1.5.1 sized buttons with content-box math, but Button is `box-sizing: border-box`, so the external box ended up 8px shorter than Input / Select / Autocomplete. Heights bumped to 28 / 32 / 36 (small / medium / large) so a Button sits the same height as a same-size Input in the same row.
