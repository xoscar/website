export interface ExplanationResponse {
  message?: string;
  explanation?: Explanation;
  error?: string;
}

export interface Explanation {
  description: string;
  errors: Error[];
  services: Service[];
  languages: Language[];
}

export interface Error {
  spanId: string;
  operationName: string;
  errorMessage: string;
  stackTrace: string;
}

export interface Service {
  serviceName: string;
  description: string;
}

export interface Language {
  serviceName: string;
  language: string;
}

const TraceGateway = {
  async explain({ file, format}: {file: File, format: string}) {
    const data = new FormData();
    data.set('format', format);
    data.set('file', file);

    const response = await fetch('/trace', {
      method: 'POST',
      body: data,
    });

    const json = (await response.json()) as ExplanationResponse;

    if (!response.ok) {
      throw new Error(json.error);
    }

    return json;
  },
};

export default TraceGateway;
