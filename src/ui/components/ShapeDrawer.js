export default function ShapeDrawer({
  width,
  heigth,
  radiusTopLeft,
  radiusTopRight,
  radiusBottomRight,
  radiusBottomLeft,
  top,
  right,
  bottom,
  left,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  backgroundColor = "#0078f0",
  clipPath,
  transform,
}) {
  return (
    <div
      className='shapeDrawer'
      style={{
        width: width,
        height: heigth,
        borderTopLeftRadius: radiusTopLeft,
        borderTopRightRadius: radiusTopRight,
        borderBottomRightRadius: radiusBottomRight,
        borderBottomLeftRadius: radiusBottomLeft,
        backgroundColor: backgroundColor,
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        borderTop: borderTop,
        borderRight: borderRight,
        borderBottom: borderBottom,
        borderLeft: borderLeft,
        clipPath: clipPath,
        transform: transform,
      }}
    ></div>
  );
}
