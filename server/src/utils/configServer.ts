import fs from 'fs';

interface IHttpHeader {
  option: string;
  value: string;
}

interface IServerConfigs {
  host: string;
  port: number;
  httpHeaders: IHttpHeader[];
}

interface ILoggerConfigs {
  logDirectory: string;
  fileNamePattern: string;
  dateFormat: string;
}

const path: string = './config.json';

const getServerConfigs = (): IServerConfigs => {
  return JSON.parse(fs.readFileSync(path, 'utf8')).server;
};

const getLoggerConfigs = (): ILoggerConfigs => {
  return JSON.parse(fs.readFileSync(path, 'utf8')).logger;
};

export { getServerConfigs, getLoggerConfigs, IHttpHeader };
