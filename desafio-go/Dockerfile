FROM golang:1.16 as build

WORKDIR /go/src

COPY . .

ENV PATH="/go/bin:${PATH}"

RUN GOOS=linux go build -o . main.go


FROM scratch

WORKDIR /go/app

COPY --from=build ./go/src/main .

CMD ["./main"]