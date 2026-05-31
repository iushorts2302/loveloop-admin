# Loveloop AI — 관리자 콘솔

Loveloop AI의 운영 콘솔. 콘텐츠·페르소나 관리에 더해 **사용자의 건강한 사용을 보호하는 운영**(웰빙·다크패턴 감사)을 핵심으로 합니다.

🔗 **라이브**: https://loveloop-admin.vercel.app

## 디자인

다크 도구 모드 — 사용자웹과 색 계열(시안/바이올렛)·Pretendard·모노 라벨을 공유하되, 네온은 절제하고 테이블/리스트는 단정·고가독으로 운영 도구에 최적화. 다크모드 가독성 WCAG AA 통과.

## 페이지 (9)

| 페이지 | 설명 |
|---|---|
| 대시보드 | KPI(DAU·사용시간·세션·차단) · 활성 추이 · 웰빙 지표 · 활동 피드 |
| 콘텐츠·페르소나 | 페르소나 톤 가드레일 검수 · 콘텐츠 승인 |
| 안전 가드레일 | 통제·집착 차단 사전 · 할루시네이션 가드 |
| **웰빙 운영** ⭐ | 과몰입 코호트 모니터 · 휴식 넛지 정책 |
| **다크패턴 감사** ⭐ | 과금 UX 점검 체크리스트(통과/주의) |
| 결제·환불 | 결제 내역 · 상한·쿨다운 정책 · 환불 |
| 신고·검토 | 신고 큐(영구삭제 별도 승인) |
| 사용자·권한 | 관리자 계정 · 미성년 보호 |
| 시스템 설정 | LLM·음성·가드레일·알림 |

⭐ 웰빙 운영 · 다크패턴 감사가 본 콘솔의 차별점 — 사용자웹의 건강 설계를 운영 차원에서 집행합니다.

## 구조

- `index.html` — 배포 진입점 (단일 파일, 빌드 불필요)
- `vercel.json` — `{cleanUrls:true, trailingSlash:false}`
- `doc/` — 산출물 사본, 스타일 가이드, 설계서, Flow/Architecture 문서

## 배포

```
vercel deploy --prod --yes --name loveloop-admin
```

## 관련

- 사용자웹: https://loveloop-user.vercel.app
- Flow & Architecture: https://loveloop-flow.vercel.app
