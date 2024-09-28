import { Controller, Delete, Get, Param, Put, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Data } from "./data.db";

@Controller("data")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() state: { data: string }) {
    return this.appService.create(state);
  }

  @Put(":id")
  updateById(@Param("id") id: string, @Body() newState: Data) {
    return this.appService.update(id, newState);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.appService.delete(id);
  }
}
