import _ from "underscore";

type GenerateGridBackgroundOptions = {
  cellSize: { width: number; height: number };
  margin: number[];
  cols: number;
  gridWidth: number;
  cellStrokeColor: string;
};

export function generateGridBackground({
  cellSize,
  margin,
  cols,
  gridWidth,
  cellStrokeColor,
}: GenerateGridBackgroundOptions) {
  const XMLNS = "http://www.w3.org/2000/svg";
  const [horizontalMargin, verticalMargin]: any = margin;
  const rowHeight = cellSize.height + verticalMargin;

  const y = 0;
  const w = cellSize.width;
  const h = cellSize.height;

  const rectangles = _(cols).times((i) => {
    const x = i * (cellSize.width + horizontalMargin);
    return `<rect stroke='${cellStrokeColor}' stroke-width='1' fill='none' x='${x}' y='${y}' width='${w}' height='${h}'/>`;
  });

  const svg = [
    `<svg xmlns='${XMLNS}' width='${gridWidth}' height='${rowHeight}'>`,
    ...rectangles,
    `</svg>`,
  ].join("");

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}
