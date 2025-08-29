// src/style/kanbanStyles.ts
import styled from "styled-components";

/* 상단 입력영역 */
export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${(p)=>p.theme.gap};
  align-items: center;
  margin: 32px auto 24px;
  max-width: 960px;
  width: 100%;
`;

export const Title = styled.h1`
  grid-column: 1 / -1;
  font-size: clamp(20px, 1.6vw + 16px, 28px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  opacity: .98;
`;

/* 입력 + 추가버튼 래퍼 (글래스/소프트모피즘) */
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
  gap: ${(p)=>p.theme.gap};
  padding: 10px;
  background: ${(p)=>p.theme.surface};
  border: 1px solid ${(p)=>p.theme.cardBorder};
  border-radius: ${(p)=>p.theme.radius};
  backdrop-filter: blur(${(p)=>p.theme.blur});
  box-shadow: ${(p)=>p.theme.shadow};
`;

export const Input = styled.input`
  height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid ${(p)=>p.theme.cardBorder};
  background: ${(p)=>p.theme.inputBg};
  color: inherit;
  transition: border .2s ease, box-shadow .2s ease;
  &:focus{
    border-color: ${(p)=>p.theme.primary};
    box-shadow: 0 0 0 4px rgba(59,130,246,.25);
  }
`;

export const AddBtn = styled.button`
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${(p)=>p.theme.cardBorder};
  background: linear-gradient(180deg, ${(p)=>p.theme.primary}, ${(p)=>p.theme.primary} 70%);
  color: #0b0f14;
  font-weight: 700;
  letter-spacing: .02em;
  cursor: pointer;
  transition: transform .08s ease, filter .2s ease;
  &:active{ transform: translateY(1px) }
  &:hover{ filter: brightness(1.05) }
`;

/* 보드 3단 그리드 */
export const Board = styled.main`
  max-width: 1200px;
  margin: 0 auto 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(${(p)=>p.theme.gap} * 1.25);

  @media (max-width: 980px){
    grid-template-columns: 1fr;
  }
`;

/* 컬럼(투두/두잉/던) */
export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(p)=>p.theme.gap};
  padding: 16px;
  border-radius: ${(p)=>p.theme.radius};
  background: ${(p)=>p.theme.cardBg};
  backdrop-filter: blur(${(p)=>p.theme.blur});
  border: 1px solid ${(p)=>p.theme.cardBorder};
  box-shadow: ${(p)=>p.theme.shadow};
  min-height: 420px;
`;

export const ColumnHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 4px 10px;
  border-bottom: 1px dashed ${(p)=>p.theme.cardBorder};
  h2{
    font-size: 16px;
    font-weight: 800;
    text-transform: lowercase;
    letter-spacing: .08em;
    opacity: .92;
  }
  .count{
    opacity: .65;
    font-size: 12px;
  }
`;

/* 카드 리스트 */
export const CardList = styled.ul`
  display: grid;
  gap: ${(p)=>p.theme.gap};
`;

/* 단일 카드 (드래그요소) */
export const Card = styled.li<{dragging?: boolean, over?: boolean}>`
  padding: 14px 12px;
  border-radius: 14px;
  background: ${(p)=>p.theme.surface};
  border: 1px solid ${(p)=>p.theme.cardBorder};
  box-shadow: ${(p)=>p.theme.shadow};
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  transform: translateZ(0); /* GPU 레이어 */
  transition: box-shadow .2s ease, transform .12s ease, background .2s ease;

  ${(p)=>p.dragging && `
    opacity: .75;
    transform: scale(.98);
  `}
  ${(p)=>p.over && `
    outline: 2px dashed ${p.theme.primary};
    outline-offset: 2px;
  `}

  &:hover{
    box-shadow: 0 14px 34px rgba(0,0,0,.25);
  }
`;

export const CardTitle = styled.span`
  font-weight: 700;
  letter-spacing: .01em;
`;

export const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
`;

export const IconBtn = styled.button<{variant?: "to"|"doing"|"done"|"delete"}>`
  height: 36px;
  min-width: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid ${(p)=>p.theme.cardBorder};
  background: ${(p)=>p.theme.inputBg};
  color: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: transform .08s ease, filter .2s ease, background .2s ease;

  &:active{ transform: translateY(1px) }
  &:hover{ filter: brightness(1.05) }

  ${(p)=>p.variant==="doing" && `background: linear-gradient(180deg, ${p.theme.warn}, ${p.theme.warn}); color: #111;`}
  ${(p)=>p.variant==="done" && `background: linear-gradient(180deg, ${p.theme.success}, ${p.theme.success}); color: #0b0f14;`}
  ${(p)=>p.variant==="delete" && `background: linear-gradient(180deg, ${p.theme.danger}, ${p.theme.danger}); color: #fff;`}
`;
