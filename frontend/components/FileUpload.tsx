import { ChangeEvent, FC, useRef } from 'react'

type FileUploadProps = {
	setFile: (file: File) => void;
	accept: string;
	children: any;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files[0]);
	}

	return (<div onClick={() => inputRef.current.click()}>
		<input
			type="file"
			accept={accept}
			onChange={onChange}
			ref={inputRef}
			style={{ display: 'none' }}
		/>
		{children}
	</div>)
}

export default FileUpload