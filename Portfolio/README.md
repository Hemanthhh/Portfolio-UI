# Portfolio React App

## Production Deployment Notes

- **Domain:** Set your real domain in `nginx.conf` under `server_name`.
- **HTTPS:** Use a reverse proxy (nginx, Caddy, Traefik, or your cloud provider) to terminate SSL and forward to this container.
- **Environment Variables:**
  - For Vite, all environment variables must start with `VITE_` and be set at build time.
  - Example: `VITE_API_URL=https://api.example.com docker-compose build`
- **Resource Limits:**
  - Resource limits are set in `docker-compose.yml` for production safety.
- **Scaling:**
  - For high-traffic, run multiple containers behind a load balancer.
- **Security:**
  - Rebuild images regularly to get security updates.
  - Scan images for vulnerabilities (e.g., with Trivy).

## Quick Start

```bash
cd Portfolio
# Build and run
docker-compose up --build
```

App will be available at http://localhost:3000
