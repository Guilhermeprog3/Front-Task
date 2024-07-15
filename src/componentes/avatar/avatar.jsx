import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function SizeAvatars({avatar}) {
  return (
     <Stack direction="row" spacing={2}>
      <Avatar
        src={avatar}
        sx={{ width: 346, height: 346 }}
      />
    </Stack>
  );
}
