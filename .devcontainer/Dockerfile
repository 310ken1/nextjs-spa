FROM node:23-slim

# パッケージインストール
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && apt-get install --no-install-recommends -y \
    sudo \
    curl \
    default-jdk \
    fonts-takao

# PlantUMLインストール
ARG plantuml="https://github.com/plantuml/plantuml/releases/download/v1.2024.7/plantuml-1.2024.7.jar"
RUN curl -LsSf ${plantuml} -o /usr/local/bin/plantuml.jar

# ユーザ追加
ARG user
RUN adduser ${user}
RUN echo "${user} ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers
USER ${user}
WORKDIR /home/${user}

# Node設定
ENV NODE_PATH=/home/${user}/node_modules \
    PATH=/home/${user}/node_modules/.bin:$PATH
RUN --mount=type=bind,source=package.json,target=package.json \
    npm install

# Next.js設定
ENV NEXT_TELEMETRY_DISABLED=1
