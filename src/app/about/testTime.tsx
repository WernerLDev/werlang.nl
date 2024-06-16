"use client";

import { TimeInput } from "@/components/forms/TimeInput";
import { useEffect, useState } from "react";

export const TestTime = () => {
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    setTime(new Date());
  }, []);

  return (
    <>
      {time && (
        <>
          <TimeInput value={time} onChange={setTime} />
          {time.toISOString()}
        </>
      )}
    </>
  );
};
