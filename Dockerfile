FROM node:20-alpine AS base

WORKDIR /home/cash-money-app

RUN apk update && apk add bash
