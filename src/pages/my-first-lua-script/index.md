---
title: My First Lua Script
date: 2020-04-24
description: Writing a DVD logo-style bounce script for Open Broadcaster Software.
---

I wrote some [Lua](https://www.lua.org/) for the first time last night to bounce scene items around in [Open Broadcaster Software](https://obsproject.com/) (OBS), in the style of the [bouncing DVD logo](https://www.bouncingdvdlogo.com/).

I've always wanted to play about with Lua as my younger kids are [Roblox](https://www.roblox.com/) mad and it's the language used to script games in [Roblox Studio](https://www.roblox.com/create), so that's potentially a way to get them into coding in the future…

Before I started, I thought I'd have to figure out the maths for velocity and bounce angles, but it turns out you don't need to for simple linear bouncing around.

This was the guts of the movement code, using a pair of booleans to control the current vertical and horizontal direction:

```lua
local next_pos = obs.vec2()

if moving_right and pos.x + width < scene_width then
   next_pos.x = math.min(pos.x + speed, scene_width - width)
else
   moving_right = false
   next_pos.x = math.max(pos.x - speed, 0)
   if next_pos.x == 0 then moving_right = true end
end

if moving_down and pos.y + height < scene_height then
   next_pos.y = math.min(pos.y + speed, scene_height - height)
else
   moving_down = false
   next_pos.y = math.max(pos.y - speed, 0)
   if next_pos.y == 0 then moving_down = true end
end

obs.obs_sceneitem_set_pos(scene_item, next_pos)
```

The rest was mostly fiddly stuff with the [OBS API](https://obsproject.com/docs/scripting.html) to grab the scene item and work out the dimensions of everything.

The following warning in the documentation is not to be trifled with!

> Please treat the API bindings as though you were writing a C program: read the documentation for functions you use, and release/destroy objects you reference or create via the API.

After using [`obs_get_source_by_name()`](https://obsproject.com/docs/reference-core.html#c.obs_get_source_by_name) to get a reference to the source object for the current scene, forgetting to release its reference with `obs.obs_source_release(source)` caused OBS to crash on exit.

The full source is here:

https://github.com/insin/obs-bounce/blob/master/bounce.lua

Finally, here's a demo of it bouncing a background logo around in an OBS scene:

`youtube:https://www.youtube.com/watch?v=FbtzencagAM`
