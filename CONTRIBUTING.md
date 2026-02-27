# Contribuir

## Commits

Usa mensajes claros:

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `refactor:` cambio de código sin alterar comportamiento
- `docs:` documentación
- `style:` formato, estilos
- `test:` tests

Ejemplo: `feat: add ProductQuoteModal for cotización`

## Antes de hacer PR

```bash
npm run lint
npm run build
npm test
```

## Estructura de código

- Componentes por dominio: `home/`, `product/`, `layout/`, `ui/`
- Tipos en `types/`
- Helpers en `lib/`
- Datos en `data/` (el UI no debe depender de fuentes externas directamente)
