interface EmailTemplateProps {
    fullname: string;
    email: string;
    company: string;
    message: string;
  }
  
  export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    fullname,
    email,
    company,
    message
  }) => (
    <div>
      <h1>Nuevo mensaje de contacto</h1>
      <div style={{ marginBottom: '16px' }}>
        <strong>Nombre:</strong> {fullname}
      </div>
      <div style={{ marginBottom: '16px' }}>
        <strong>Email:</strong> {email}
      </div>
      <div style={{ marginBottom: '16px' }}>
        <strong>Empresa:</strong> {company}
      </div>
      <div style={{ marginBottom: '16px' }}>
        <strong>Mensaje:</strong> {message}
      </div>
    </div>
  );