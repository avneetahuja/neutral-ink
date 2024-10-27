
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function UploadFileButton() {
  return (
    <div>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            accept=".txt"
            onChange={(event) => console.log(event.target.files)}
          />
        </Button>
    </div>
  );
}

export default UploadFileButton;
