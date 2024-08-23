---
title: Using Cerebellum
description: Using Cerebellum
sidebar_position: 0
---

# Using Cerebellum

## Cerebellum CLI

The Cerebellum Command Line Interface (CLI) allows you to deploy ready-made infrastructure to AWS with just a few simple commands. After signing in with your AWS credentials and setting a few custom configurations, the CLI tool leverages our open-source Cloud Development Kit (CDK) to deploy production-ready infrastructure directly to your AWS account.

## Cerebellum WebSocket Server

Cerebellum’s production-ready WebSocket Server is available on [Docker Hub](https://hub.docker.com/r/willconrad/cerebellum) and comes pre-configured as the default for CLI deployments. This server offers a fully-featured WebSocket API for seamless interaction with the Cerebellum SDK, along with essential tools for scaling your realtime application, including database configuration, Redis cache integration, authentication, and more.

If you wish to use your own WebSocket server, you can provide the image in the CLI deployment.

## Cerebellum SDK

The Cerebellum Software Development Kit (SDK) includes a library that facilitates interaction with the WebSocket server. It can be integrated into your frontend code to establish WebSocket connections and enable realtime functionality.
