import { getElementByID } from "src/utils";

interface Point {
  x: number;
  y: number;
}

interface Item {
  titleList: string[];
  score: number;
  fullScore: number;
}

const calcRadius = (edgeCount: number, edgeLength: number) => {
  const radius = edgeLength / (2 * Math.sin(Math.PI / edgeCount));
  return radius;
};

const calcVertexPositions = (
  radius: number,
  edgeCount: number,
  centerX: number = 0,
  centerY: number = 0
) => {
  const points: Point[] = [];
  const mAngle = (2 * Math.PI) / edgeCount;
  for (let i = 0; i < edgeCount; i++) {
    const angle = mAngle * i;
    const x = centerX + radius * Math.sin(angle);
    const y = centerY - radius * Math.cos(angle);
    points.push({ x, y });
  }
  return points;
};

export const drawPolygon = (
  ctx: CanvasRenderingContext2D,
  polygonInfo: { radius: number; edgeCount: number }
) => {
  const { radius, edgeCount } = polygonInfo;

  const draw = (points: Point[]) => {
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < edgeCount; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.closePath();
    ctx.strokeStyle = "#3388FF";
    ctx.stroke();
  };

  const points = calcVertexPositions(radius, edgeCount);
  draw(points);
  return points;
};

const drawPolygons = (
  ctx: CanvasRenderingContext2D,
  radarMapInfo: {
    polygonCount: number;
    edgeCount: number;
    edgeLength: number;
  }
) => {
  const { polygonCount, edgeCount, edgeLength } = radarMapInfo;

  const drawDiagonals = (points: Point[]) => {
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      ctx.moveTo(0, 0);
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
  };

  const radius = calcRadius(edgeCount, edgeLength);
  const r = radius / edgeCount;
  for (let i = 0; i < polygonCount; i++) {
    const currentRadius = r * (i + 1);
    const points = drawPolygon(ctx, {
      radius: currentRadius,
      edgeCount,
    });
    if (i === polygonCount - 1) {
      drawDiagonals(points);
      return points;
    }
  }
};

function drawRadar(
  ctx: CanvasRenderingContext2D,
  edgeCount: number,
  edgeLength: number,
  items: Item[]
) {
  const radius = calcRadius(edgeCount, edgeLength);
  const points = calcVertexPositions(radius, edgeCount);
  const radarVertex = items.map(({ score, fullScore }, index) => {
    const { x, y } = points[index];
    const ratio = score / fullScore;
    return { x: x * ratio, y: y * ratio };
  });

  ctx.beginPath();
  for (let i = 0; i < edgeCount; i++) {
    i === 0
      ? ctx.moveTo(radarVertex[i].x, radarVertex[i].y)
      : ctx.lineTo(radarVertex[i].x, radarVertex[i].y);
  }
  ctx.fillStyle = "rgba(204,0,0,0.3)";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function drawVertexTxt(
  ctx: CanvasRenderingContext2D,
  edgeCount: number,
  polygonPoints: Point[],
  items: Item[]
) {
  ctx.font = "normal normal lighter 10px Arial";
  ctx.fillStyle = "#333";

  const topPointIndex = 0;

  for (let i = 0; i < polygonPoints.length; i++) {
    ctx.save();
    ctx.translate(polygonPoints[i].x, polygonPoints[i].y);
    let indentX = 0;
    let indentY = 0;
    if (i === topPointIndex) {
      // 最高点
      ctx.textAlign = "center";
      indentY = -22;
    } else {
      if (polygonPoints[i].x > 0 && polygonPoints[i].y >= 0) {
        ctx.textAlign = "left";
        indentX = 5;
      } else if (polygonPoints[i].x < 0) {
        ctx.textAlign = "right";
        indentX = -5;
      }
    }
    // 如果是正四边形，则需要单独处理最低点
    if (edgeCount === 4 && i === 1) {
      indentY = 10;
    }
    items[i].titleList.forEach((item, index) => {
      ctx.fillText(item, indentX, indentY + index * 15);
    });
    ctx.restore();
  }
}

export const drawRadarMap = async ({
  dpr,
  canvasID,
  edgeLength,
  polygonCount,
  items,
  canvasWidth,
  canvasHeight,
}: {
  dpr: number;
  canvasID: string;
  edgeLength: number;
  polygonCount: number;
  canvasWidth: number;
  canvasHeight: number;
  items: Item[];
}) => {
  const canvas = await getElementByID(canvasID);
  //解决模糊问题
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(dpr, dpr);

  const edgeCount = items.length;

  const polygonPoints = drawPolygons(ctx, {
    polygonCount,
    edgeCount,
    edgeLength,
  });
  drawRadar(ctx, edgeCount, edgeLength, items);
  drawVertexTxt(ctx, edgeCount, polygonPoints!, items);
};
