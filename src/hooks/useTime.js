import { useEffect, useState } from 'react';

const useTime = () => {
  // 1. Keep track of the current date's state. `useState` receives an initializer function as its
  //    initial state. It only runs once when the hook is called, so only the current date at the
  //    time the hook is called is set first.
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    // 2. Update the current date every second using `setInterval`.
    const timerId = setInterval(() => {
      setTime(new Date()); // ✅ Good: non-idempotent code no longer runs in render
    }, 1000);

    // 3. Return a cleanup function so we don't leak the `setInterval` timer.
    return () => clearInterval(timerId);
  }, []);

  return time;
};

export default useTime;

// NOTE: https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent:~:text=%7D-,Components%20and%20Hooks%20must%20be%20idempotent,-Components%20must%20always
