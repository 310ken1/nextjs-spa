FROM node:lts-bullseye

# パッケージインストール
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
--mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && apt-get install --no-install-recommends -y \
    sudo \
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
