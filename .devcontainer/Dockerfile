# Use official Node.js image (LTS version)
FROM node:22-bookworm-slim

# Install git dependencies to work frm inside the ocntainer
RUN apt-get update && \
apt-get install -y --no-install-recommends git ssh && \
rm -rf /var/lib/apt/lists/* 

# use the built-in node user from the node image
USER node

# Command to run the app (this will run `index.js`)
ENTRYPOINT ["/bin/bash"]
