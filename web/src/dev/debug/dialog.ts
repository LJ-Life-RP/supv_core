import { debugData } from "../../utils/debugData";
import type {DialogProps} from "../../typings/Dialog";

export const debugDialog = () => {
  /*debugData([
      {
        action: 'supv:dialog:opened',
        data: {
          /*title: 'Dialog title',
          subtitle: 'Lorem Ipsum',
          description: 'Contrary to popular.',
        } as DialogProps,
      }
  ]);*/

  debugData([
      {
        action: 'supv:dialog:opened',
        data: {
          title: 'Dialog title',
          subtitle: 'Mon code snippet',
          description: `
~~~tsx
return (
  <>
      <Tooltip label="Dev Tool" position="left">
          <ActionIcon
              variant="outline"
              color="gray"
              onClick={() => setOpened(true)}
              style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
          >
              <FontAwesomeIcon icon={faWrench} />
          </ActionIcon>
      </Tooltip>

      <Drawer opened={opened} onClose={() => setOpened(false)} title="tool dev" padding="md" size={300}>
          <Stack spacing="md">
              <Divider />
              <Button variant="outline" color="blue" fullWidth onClick={() => {debugDialog(); setOpened(false)}}>Dialog</Button>
              <Button variant='outline' color='red' fullWidth onClick={() => debugNotification()}>Notication</Button>
          </Stack>
      </Drawer>
  </>
);
~~~       
`,
        } as DialogProps,
      }
  ]);
}