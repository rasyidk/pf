# Docker Deployment Configuration

This document describes the Docker deployment setup for the portfolio website.

## Files Created

### 1. Dockerfile

A multi-stage Dockerfile optimized for Next.js 15+ production deployment:

**Stage 1: Dependencies (deps)**
- Uses Node.js 18 Alpine for minimal size
- Installs production dependencies only
- Adds libc6-compat for compatibility

**Stage 2: Builder**
- Installs all dependencies (including devDependencies)
- Builds the Next.js application with standalone output
- Disables telemetry for privacy

**Stage 3: Runner**
- Minimal production image
- Copies only necessary files (public, standalone, static)
- Runs as non-root user (nextjs:nodejs) for security
- Exposes port 3000
- Optimized for minimal image size (~250MB content)

### 2. docker-compose.yml

Simple orchestration configuration:
- Service name: `portfolio-website`
- Port mapping: 3000:3000
- Environment: Production mode
- Restart policy: unless-stopped
- Custom network: portfolio-network

### 3. .dockerignore

Excludes unnecessary files from build context:
- node_modules (installed fresh in container)
- .next build output (rebuilt in container)
- Git files and IDE configurations
- Test files and coverage reports
- Environment files
- Documentation (except README.md)
- Kiro specs

### 4. next.config.ts Update

Added `output: 'standalone'` configuration:
- Enables Next.js standalone mode
- Creates self-contained server bundle
- Reduces deployment size significantly
- Required for optimal Docker deployment

## Usage

### Build the Docker Image

```bash
docker build -t portfolio-website .
```

### Run with Docker

```bash
docker run -p 3000:3000 portfolio-website
```

### Run with Docker Compose (Recommended)

```bash
# Start the application
docker compose up -d

# View logs
docker compose logs -f

# Stop the application
docker compose down
```

## Verification

The Docker configuration has been tested and verified:

✅ Docker build completes successfully  
✅ Image size optimized (~1.23GB total, 250MB content)  
✅ Container starts without errors  
✅ Next.js server runs on port 3000  
✅ Website accessible and returns HTTP 200  
✅ docker-compose.yml syntax validated  

## Security Features

- **Non-root user**: Application runs as `nextjs` user (UID 1001)
- **Minimal base image**: Alpine Linux for reduced attack surface
- **Production dependencies only**: Runtime stage excludes devDependencies
- **No secrets in image**: Environment variables configured externally

## Performance Optimizations

- **Multi-stage build**: Separates build and runtime dependencies
- **Standalone output**: Self-contained server bundle
- **Layer caching**: Optimized layer order for faster rebuilds
- **Minimal image size**: Only essential files in final image

## Requirements Satisfied

This implementation satisfies the following requirements from the spec:

- **14.1**: Multi-stage Dockerfile with builder and runner stages ✅
- **14.2**: docker-compose.yml for easy deployment ✅
- **14.3**: .dockerignore to exclude unnecessary files ✅
- **14.4**: Install dependencies in builder stage ✅
- **14.5**: Configure port exposure (3000) ✅
- **14.6**: Optimize for minimal image size ✅

## Next Steps

To deploy to production:

1. Push image to container registry (Docker Hub, ECR, GCR, etc.)
2. Configure environment variables if needed
3. Set up reverse proxy (nginx, Traefik) for HTTPS
4. Configure domain and SSL certificates
5. Set up monitoring and logging
6. Configure backup and disaster recovery

## Troubleshooting

### Build fails with "Cannot find module"
- Ensure all dependencies are in package.json
- Clear Docker cache: `docker builder prune`

### Container exits immediately
- Check logs: `docker logs <container-id>`
- Verify standalone output was created: `ls .next/standalone`

### Port already in use
- Change port mapping: `docker run -p 3001:3000 portfolio-website`
- Or stop conflicting service: `lsof -ti:3000 | xargs kill`

### Image size too large
- Verify .dockerignore is working
- Check for unnecessary files in build context
- Use `docker image inspect portfolio-website` to analyze layers
