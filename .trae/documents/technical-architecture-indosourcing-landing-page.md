## 1.Architecture design
```mermaid
graph TD
  A["User Browser"] --> B["React (Vite) Frontend"]
  B --> C["UI Components (shadcn-like)"]

  subgraph "Frontend Layer"
    B
    C
  end
```

## 2.Technology Description
- Frontend: React@18 + TypeScript + vite + tailwindcss + shadcn/ui-style component system
- Backend: None

## 3.Route definitions
| Route | Purpose |
|-------|---------|
| / | Landing page utama dengan CTA Buyer/Supplier dan section berbasis anchor |
