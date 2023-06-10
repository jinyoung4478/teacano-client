import {atom, RecoilState} from 'recoil';

// 새로고침 시에도 recoil 상태값 유지해야할 경우 사용하는 유틸 (session storage)
export const atomWithLocalStorage = <T>(
  key: string,
  defaultValue: T
): RecoilState<T> => {
  const initial = localStorage.getItem(key);
  const initialData = initial ? JSON.parse(initial) : defaultValue;

  const atomState = atom<T>({
    key: key,
    default: initialData,
    effects_UNSTABLE: [
      ({onSet}) => {
        onSet((newValue) => {
          localStorage.setItem(key, JSON.stringify(newValue));
        });
      },
    ],
  });

  return atomState;
};
