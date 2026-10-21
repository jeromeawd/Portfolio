---
name: Data Visualization
description: Use when selecting, building, or reviewing charts and dashboards, including data shaping, scales, color, accessibility, tooltips, dashboards, and visualization performance.
---

# Data Visualization

## When to use

Use for chart selection, dashboard layout, data aggregation, chart components, and visualization reviews. Use `ui-ux-design` for overall page hierarchy and `tailwind-shadcn` for styling primitives.

## Start with the question

Write down the decision or comparison the viewer must make. Choose the chart from that question, not from visual preference.

| Question | Usually use | Avoid |
| --- | --- | --- |
| Compare categories | Horizontal bar | Pie with many slices |
| Change over time | Line or area | 3D bars |
| Distribution | Histogram, dot plot, box plot | Aggregated averages only |
| Correlation | Scatter | Dual-axis time series |
| Part of a whole | Stacked bar, treemap | Exploded pie charts |
| Ranking | Sorted bar | Alphabetical order |

## Data integrity

- Preserve units, precision, and meaning during aggregation.
- Do not truncate a value axis without a clear visual cue and explanation.
- Keep comparable scales across small multiples.
- Do not connect categorical points with a line unless the categories are ordered.
- Label missing data explicitly; never interpolate silently.
- Show sample size or uncertainty when it changes interpretation.
- Document filters, date ranges, and exclusions next to the chart.

## Visual encoding

- Use position and length for precise comparisons; reserve area and angle for approximate messages.
- Limit categorical colors to a readable set and reuse the same color for the same series across charts.
- Use a sequential palette for ordered values, a diverging palette for meaningful midpoints, and a categorical palette for unordered groups.
- Use `--chart-1` through `--chart-5` from the project theme, but verify contrast and distinguishability. Do not rely on color alone.
- Keep gridlines and axes quiet; remove chartjunk and redundant labels.
- Format large numbers and dates for the locale and context.

## Interaction and accessibility

- Give every chart a title, summary, and accessible name.
- Provide a text or table alternative for key values.
- Tooltips must be keyboard reachable or have an equivalent data view; do not make hover the only path.
- Announce loading and errors; provide an empty state that explains why no data exists.
- Use `prefers-reduced-motion` and avoid entrance animations that delay reading.
- Test at narrow widths; allow horizontal scroll or a stacked layout rather than shrinking labels to illegibility.

## Performance

- Aggregate or downsample large series before rendering.
- Avoid recreating scales, formatters, and derived arrays on every render.
- Use SVG for moderate data volumes and canvas/WebGL only when measurement proves it is needed.
- Lazy-load chart bundles that are not on the initial route.
- Keep tooltips and hover state local to the chart.

## Library policy

No chart library is installed. For simple cases, use semantic HTML, SVG, or CSS. For complex interactive charts, propose a library with bundle size, accessibility, and maintenance trade-offs; add it only after user approval.

## Common mistakes

- Choosing a pie chart for many categories.
- Dual axes that invite false correlations.
- Color-only encoding or low-contrast series.
- Decorative animation and 3D effects.
- Tooltips that show different precision than the axis.
- Missing empty, loading, error, and single-point states.
- Labeling every data point and creating visual noise.
- Writing chart logic inside JSX instead of pure data preparation.

## Security and privacy

- Treat labels and tooltip content as untrusted text; never inject raw HTML.
- Do not expose personal or sensitive data in client bundles, URLs, or tooltips.
- Avoid third-party chart embeds and scripts unless approved and reviewed.

## Workflow

1. Define the viewer question, data source, units, and range.
2. Prepare and validate data outside the render path.
3. Choose the encoding and test it with representative and edge-case data.
4. Implement accessibility and responsive behavior.
5. Measure performance with realistic data volume.
6. Hand the result to `qa-code-reviewer` for edge-case and accessibility checks.
