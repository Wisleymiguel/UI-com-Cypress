FROM cypress/included:12.17.3

WORKDIR /e2e

COPY . .

CMD ["npx", "cypress", "run"]
