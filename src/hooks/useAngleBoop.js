import useBoop from "./useBoop";

const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // First, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);
  // Next, transpose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};

const useAngledBoop = (index) => {
  // The star has 5 points across a 360-degree area.
  let angle = index * (360 / 5);
  // By default in JS, 0-degrees is the 3-o'clock
  // position, to let the animation start at
  // the 12-o'clock position, subtract
  // 90 degrees
  angle -= 90;
  // Trigonometry methods in JS use radians, not
  // degrees, so we need to convert.
  const angleInRads = (angle * Math.PI) / 180;
  const distance = 42;
  // Convert polar coordinages (angle, distance)
  // to cartesian ones (x, y), since JS uses
  // a cartesian coordinate system:
  const x = distance * Math.cos(angleInRads);
  const y = distance * Math.sin(angleInRads);
  // `normalize` is commonly called "lerp",
  // as well as Linear Interpolation. It
  // maps a value from one scale to another.
  // In this case, the time varies
  // between 450ms and 600ms, with the first
  // point being the slowest, and the last
  // one being the fastest.

  let timing = normalize(index, 0, 4, 450, 600);
  // `normalize` produces linear interpolation,
  // but you can create an ease, so it appears to be slowing down;

  timing *= 1 + index * 0.22;
  const friction = normalize(index, 0, 4, 15, 40);
  const boop = useBoop({
    x,
    y,
    timing,
    scale: 1.4,
    springConfig: { tension: 180, friction },
  });
  return boop;
};

export default useAngledBoop;
