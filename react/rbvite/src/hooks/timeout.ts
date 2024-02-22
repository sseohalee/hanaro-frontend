/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(); // 타이머가 새로 생길 때마다 rerendering 되는 것을 방지하기 위해
  const cbRef = useRef(cb);
  cbRef.current = cb; // current값만 바꾸면 렌더링 x
  const delayRef = useRef(delay);
  delayRef.current = delay;

  const setup = useCallback(() => {
    console.log('set-up!!', delay, delayRef.current);
    // timerRef.current = setTimeout(cbRef.current, delay);
    timerRef.current = setTimeout(cb, delay);
  }, [cb, delay]);

  const clear = useCallback(() => {
    console.log('clear!!');
    clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    console.log('reset!!');
    clear();
    setup();
  }, [setup, clear]);

  useEffect(() => {
    // timerRef.current = setTimeout(cb, delay);
    setup();

    return clear;
  }, dependencies);

  return { reset, clear };
};
